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

module.exports = {
  settings,
  properties: property_list,
  expressions,
  conditions,
  actions,
};
