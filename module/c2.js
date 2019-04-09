const fs      = require('fs');
const path    = require('path');
const shelljs = require('shelljs');
const os      = require('os');
const uuid    = require('uuid/v4');

/**
 *
 * @param {string} filePath edittime.js path
 */
module.exports = (filePath) => {
  const header   = fs.readFileSync(path.join(__dirname, 'polyfills', 'c2-plugin-header.js'));
  const footer   = fs.readFileSync(path.join(__dirname, 'polyfills', 'c2-plugin-footer.js'));
  const original = fs.readFileSync(path.resolve(filePath));

  const tempPath = path.join(os.tmpdir(), uuid());

  shelljs.mkdir('-p', tempPath);

  fs.writeFileSync(
    path.join(tempPath, 'tmp-edittime.js'),
    `${header}
${original}
${footer}`,
    'utf8');

  const plugin = require(path.join(tempPath, 'tmp-edittime.js'));

  shelljs.rm('-rf', tempPath);

  return plugin;
};
