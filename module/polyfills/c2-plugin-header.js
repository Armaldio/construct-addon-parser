var conditions  = [];
var actions     = [];
var expressions = [];
var properties  = [];

var cf_trigger                    = 1;
var cf_none                       = 2;
var cf_fake_trigger               = 4;
var cf_static                     = 8;
var cf_not_invertible             = 16;
var cf_deprecated                 = 32;
var cf_incompatible_with_triggers = 64;
var cf_looping                    = 128;

function cf_flagsMaskToArray(flagMask) {
  const flags = [
    {
      name : 'cf_trigger',
      value: cf_trigger,
    },
    {
      name : 'cf_none',
      value: cf_none,
    },
    {
      name : 'cf_fake_trigger',
      value: cf_fake_trigger,
    },
    {
      name : 'cf_static',
      value: cf_static,
    },
    {
      name : 'cf_not_invertible',
      value: cf_not_invertible,
    },
    {
      name : 'cf_deprecated',
      value: cf_deprecated,
    },
    {
      name : 'cf_incompatible_with_triggers',
      value: cf_incompatible_with_triggers,
    },
    {
      name : 'cf_looping',
      value: cf_looping,
    },
  ];

  const result = [];

  flags.forEach(flag => {
    if (flagMask & flag.value) {
      result.push(flag.name);
    }
  });
  return result;
}

var af_deprecated = 1;
var af_none       = 2;

function af_flagsMaskToArray(flagMask) {
  const flags = [
    {
      name : 'af_deprecated',
      value: af_deprecated,
    },
    {
      name : 'af_none',
      value: af_none,
    },
  ];

  const result = [];

  flags.forEach(flag => {
    if (flagMask & flag.value) {
      result.push(flag.name);
    }
  });
  return result;
}

var ef_return_number       = 1;
var ef_return_string       = 2;
var ef_return_any          = 4;
var ef_variadic_parameters = 8;
var ef_deprecated          = 16;

function ef_flagsMaskToArray(flagMask) {
  const flags = [
    {
      name : 'ef_return_number',
      value: ef_return_number,
    },
    {
      name : 'ef_return_string',
      value: ef_return_string,
    },
    {
      name : 'ef_return_any',
      value: ef_return_any,
    },
    {
      name : 'ef_variadic_parameters',
      value: ef_variadic_parameters,
    },
    {
      name : 'ef_deprecated',
      value: ef_deprecated,
    },
  ];

  const result = [];

  flags.forEach(flag => {
    if (flagMask & flag.value) {
      result.push(flag.name);
    }
  });
  return result;
}

var pf_singleglobal    = 1;
var pf_texture         = 2;
var pf_animations      = 4;
var pf_tiling          = 8;
var pf_position_aces   = 16;
var pf_size_aces       = 32;
var pf_appearance_aces = 64;
var pf_zorder_aces     = 128;

function settings_flagsMaskToArray(flagMask) {
  const flags = [
    {
      name : 'pf_singleglobal',
      value: pf_singleglobal,
    },
    {
      name : 'pf_texture',
      value: pf_texture,
    },
    {
      name : 'pf_animations',
      value: pf_animations,
    },
    {
      name : 'pf_tiling',
      value: pf_tiling,
    },
    {
      name : 'pf_position_aces',
      value: pf_position_aces,
    },
    {
      name : 'pf_size_aces',
      value: pf_size_aces,
    },
    {
      name : 'pf_appearance_aces',
      value: pf_appearance_aces,
    },
    {
      name : 'pf_zorder_aces',
      value: pf_zorder_aces,
    },
  ];

  const result = [];

  flags.forEach(flag => {
    if (flagMask & flag.value) {
      result.push(flag.name);
    }
  });
  return result;
}

var bf_onlyone = 'bf_onlyone';

var ept_integer = 1;
var ept_float   = 2;
var ept_text    = 4;
var ept_color   = 8;
var ept_font    = 16;
var ept_combo   = 32;
var ept_link    = 64;
var ept_section = 128;

function ept_flagsMaskToArray(flagMask) {
  const flags = [
    {
      name : 'ept_integer',
      value: ept_integer,
    },
    {
      name : 'ept_float',
      value: ept_float,
    },
    {
      name : 'ept_text',
      value: ept_text,
    },
    {
      name : 'ept_color',
      value: ept_color,
    },
    {
      name : 'ept_font',
      value: ept_font,
    },
    {
      name : 'ept_combo',
      value: ept_combo,
    },
    {
      name : 'ept_link',
      value: ept_link,
    },
    {
      name : 'ept_section',
      value: ept_section,
    },
  ];

  const result = [];

  flags.forEach(flag => {
    if (flagMask & flag.value) {
      result.push(flag.name);
    }
  });
  return result;
}

var params        = [];
var combo_options = [];

function AddNumberParam(name, description, initial_str) {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddNumberParam',
  });
}

function AddStringParam(name, description, initial_str) {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddStringParam',
  });
}

function AddAnyTypeParam(name, description, initial_str) {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddAnyTypeParam',
  });
}

function AddCmpParam(name, description) {
  params.push({
    name,
    description,
    caller: 'AddCmpParam',
  });
}

function AddComboParamOption(text) {
  combo_options.push({
    text,
    caller: 'AddComboParamOption',
  });
}

function AddComboParam(name, description, initial) {
  params.push({
    name,
    description,
    initial,
    options: combo_options,
    caller : 'AddComboParam',
  });
  combo_options = [];
}

function AddObjectParam(name, description) {
  params.push({
    name,
    description,
    caller: 'AddObjectParam',
  });
}

function AddLayerParam(name, description) {
  params.push({
    name,
    description,
    caller: 'AddLayerParam',
  });
}

function AddLayoutParam(name, description) {
  params.push({
    name,
    description,
    caller: 'AddLayoutParam',
  });
}

function AddKeybParam(name, description) {
  params.push({
    name,
    description,
    caller: 'AddKeybParam',
  });
}

function AddAnimationParam(name, description, initial_str) {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddAnimationParam',
  });
}

function AddAudioFileParam(name, description) {
  params.push({
    name,
    description,
    caller: 'AddAudioFileParam',
  });
}

function AddVariadicParams(name, description) {
  params.push({
    name,
    description,
    caller: 'AddVariadicParams',
  });
}

function AddCondition(id, flags, list_name, category, display_string, description, script_name) {
  conditions.push({
    id,
    flags,
    list_name,
    category,
    display_string,
    description,
    script_name,
    params,
    caller: 'AddCondition',
  });
  params = [];
}

function AddAction(id, flags, list_name, category, display_string, description, script_name) {
  actions.push({
    id,
    flags,
    list_name,
    category,
    display_string,
    description,
    script_name,
    params,
    caller: 'AddAction',
  });
  params = [];
}

function AddExpression(id, flags, list_name, category, expression_name, description) {
  expressions.push({
    id,
    flags,
    list_name,
    category,
    description,
    expression_name,
    params,
    caller: 'AddExpression',
  });
  params = [];
}

var Property = function (flags, key, initial_str, description) {
  properties.push({
    flags,
    key,
    initial_str,
    description,
  });
};

var cr = {
  Property,
};

function ACESDone() {
}

function assert2() {
  return false;
};
