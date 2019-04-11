const fs               = require('fs');
const path             = require('path');
const shelljs          = require('shelljs');
const os               = require('os');
const uuid             = require('uuid/v4');
const moduleFromString = require('require-from-string');
const { extract, find }      = require('./utils');

/**
 *
 * @param {string} filePath edittime.js path
 * @param metadata
 */
module.exports = async (filePath, metadata) => {

  const root = path.join(path.dirname(filePath), uuid());

  let file = filePath;
  const isC2Addon = metadata.mimetype === 'application/octet-stream' && path.extname(metadata.originalname) === '.c2addon';
  if (isC2Addon) {
    console.log('isAddon', isC2Addon);
    // shelljs.mkdir('-p', root);

    try {
      await extract(filePath, root);
      const files = await find(root);
      if (files.length === 1) {
        file = files[0];
        console.log('changed file to ', file);
      }
    } catch (e) {
      console.log(e);
      return;
    }
  }

  console.log('file', file);

  const header   = fs.readFileSync(path.join(__dirname, 'polyfills', 'c2-plugin-header.js'));
  const footer   = fs.readFileSync(path.join(__dirname, 'polyfills', 'c2-plugin-footer.js'));
  const original = fs.readFileSync(path.resolve(file));

  const pluginjs = `${header}
${original}
${footer}`;

  const plugin = moduleFromString(pluginjs);

  if (isC2Addon) {
    shelljs.rm('-rf', root);
  }
  shelljs.rm(filePath);

  return plugin;
};
