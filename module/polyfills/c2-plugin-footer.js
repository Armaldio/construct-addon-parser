var settings   = GetPluginSettings();
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
