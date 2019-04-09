let settings = {};
try {
  settings = GetPluginSettings();
  settings.type = 'plugin'
} catch (e) {
  console.log('Not a plugin');
}

try {
  settings = GetBehaviorSettings();
  settings.type = 'behavior'
} catch (e) {
  console.log('Not a plugin');
}

settings.flags = settings_flagsMaskToArray(settings.flags);

expressions.forEach(expression => {
  expression.flags = ef_flagsMaskToArray(expression.flags);
});

actions.forEach(action => {
  action.flags = af_flagsMaskToArray(action.flags);
});

conditions.forEach(condition => {
  condition.flags = cf_flagsMaskToArray(condition.flags);
});

properties.forEach(property => {
  property.flags = ept_flagsMaskToArray(property.flags);
});

module.exports = {
  settings,
  properties,
  expressions,
  conditions,
  actions,
};
