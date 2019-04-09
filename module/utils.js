const recursive  = require('recursive-readdir');
const extractZip = require('extract-zip');
const path = require('path');

const extract = async (file, out) => {
  return new Promise((resolve, reject) => {
    extractZip(file, { dir: out }, function (err) {
      if (err) reject(err);
      resolve(file);
    });
  });
};

function ignoreFunc(file, stats) {
  return !stats.isDirectory() && path.basename(file) !== 'edittime.js';
}

// Ignore files named "foo.cs" and descendants of directories named test
const find = async (root) => {
  return new Promise((resolve, reject) => {
    recursive(root, [ ignoreFunc ], function (err, files) {
      if (err) reject(err);
      resolve(files);
    });
  });
};

module.exports = {
  extract,
  find,
};
