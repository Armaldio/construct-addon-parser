const fs               = require('fs');
const path             = require('path');
const shelljs          = require('shelljs');
const os               = require('os');
const uuid             = require('uuid/v4');
const moduleFromString = require('require-from-string');
const { extract }      = require('./utils');

/**
 *
 * @param {string} filePath edittime.js path
 */
module.exports = async (filePath) => {
  const root = path.join(path.dirname(filePath), uuid());

  try {
    await extract(filePath, root);
  } catch (e) {
    console.log(e);
    return;
  }

  // aces.json ///
  const addon = require(path.join(root, 'aces.json'));

  const conditions = [];
  Object.keys(addon).forEach(entry => {
    let _conditions = addon[ entry ].conditions;
    if (!_conditions || _conditions.length === 0) return;
    _conditions.map(c => c.category = entry);
    conditions.push(..._conditions);
  });

  const actions = [];
  Object.keys(addon).forEach(entry => {
    let _actions = addon[ entry ].actions;
    if (!_actions || _actions.length === 0) return;
    _actions.map(c => c.category = entry);
    actions.push(..._actions);
  });

  const expressions = [];
  Object.keys(addon).forEach(entry => {
    let _expressions = addon[ entry ].expressions;
    if (!_expressions || _expressions.length === 0) return;
    _expressions.map(c => c.category = entry);
    expressions.push(..._expressions);
  });

  // plugin.js ///
  const header = fs.readFileSync(path.join(__dirname, 'polyfills', 'c3-plugin-header.js'));
  const footer = fs.readFileSync(path.join(__dirname, 'polyfills', 'c3-plugin-footer.js'));

  let pluginjs         = fs.readFileSync(path.join(root, 'plugin.js'), 'utf8');
  pluginjs             = pluginjs.replace('"use strict";', '');
  pluginjs             = `${header}
  ${pluginjs}
  ${footer}`;
  const pluginJsModule = moduleFromString(pluginjs);

  // console.log('module', JSON.stringify(pluginJsModule.settings, null, '  '));

  const settings   = pluginJsModule.settings;
  const properties = pluginJsModule.settings.properties;

  delete pluginJsModule.settings.properties;

  shelljs.rm('-rf', root);
  shelljs.rm(filePath);

  return {
    settings,
    expressions,
    conditions,
    actions,
    properties,
  };
};
