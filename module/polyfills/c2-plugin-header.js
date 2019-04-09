const conditions  = [];
const actions     = [];
const expressions = [];
const properties  = [];

const cf_trigger                    = 1;
const cf_none                       = 2;
const cf_fake_trigger               = 4;
const cf_static                     = 8;
const cf_not_invertible             = 16;
const cf_deprecated                 = 32;
const cf_incompatible_with_triggers = 64;
const cf_looping                    = 128;

const cf_flagsMaskToArray = (flagMask) => {
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
};

const af_deprecated = 1;
const af_none       = 2;

const af_flagsMaskToArray = (flagMask) => {
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
};

const ef_return_number         = 1;
const ef_return_string         = 2;
const ef_return_any            = 4;
const ef_constiadic_parameters = 8;
const ef_deprecated            = 16;
const ef_variadic_parameters = 32;

const ef_flagsMaskToArray = (flagMask) => {
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
      name : 'ef_constiadic_parameters',
      value: ef_constiadic_parameters,
    },
    {
      name : 'ef_deprecated',
      value: ef_deprecated,
    },
    {
      name : 'ef_variadic_parameters',
      value: ef_variadic_parameters,
    },
  ];

  const result = [];

  flags.forEach(flag => {
    if (flagMask & flag.value) {
      result.push(flag.name);
    }
  });
  return result;
};

const pf_singleglobal    = 1;
const pf_texture         = 2;
const pf_animations      = 4;
const pf_tiling          = 8;
const pf_position_aces   = 16;
const pf_size_aces       = 32;
const pf_appearance_aces = 64;
const pf_zorder_aces     = 128;

const settings_flagsMaskToArray = (flagMask) => {
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
};

const bf_onlyone = 'bf_onlyone';

const ept_integer = 1;
const ept_float   = 2;
const ept_text    = 4;
const ept_color   = 8;
const ept_font    = 16;
const ept_combo   = 32;
const ept_link    = 64;
const ept_section = 128;

const ept_flagsMaskToArray = (flagMask) => {
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
};

let params        = [];
let combo_options = [];

const AddNumberParam = (name, description, initial_str) => {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddNumberParam',
  });
};

const AddStringParam = (name, description, initial_str) => {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddStringParam',
  });
};

const AddAnyTypeParam = (name, description, initial_str) => {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddAnyTypeParam',
  });
};

const AddCmpParam = (name, description) => {
  params.push({
    name,
    description,
    caller: 'AddCmpParam',
  });
};

const AddComboParamOption = (text) => {
  combo_options.push({
    text,
    caller: 'AddComboParamOption',
  });
};

const AddComboParam = (name, description, initial) => {
  params.push({
    name,
    description,
    initial,
    options: combo_options,
    caller : 'AddComboParam',
  });
  combo_options = [];
};

const AddObjectParam = (name, description) => {
  params.push({
    name,
    description,
    caller: 'AddObjectParam',
  });
};

const AddLayerParam = (name, description) => {
  params.push({
    name,
    description,
    caller: 'AddLayerParam',
  });
};

const AddLayoutParam = (name, description) => {
  params.push({
    name,
    description,
    caller: 'AddLayoutParam',
  });
};

const AddKeybParam = (name, description) => {
  params.push({
    name,
    description,
    caller: 'AddKeybParam',
  });
};

const AddAnimationParam = (name, description, initial_str) => {
  params.push({
    name,
    description,
    initial_str,
    caller: 'AddAnimationParam',
  });
};

const AddAudioFileParam = (name, description) => {
  params.push({
    name,
    description,
    caller: 'AddAudioFileParam',
  });
};

const AddVariadicParams = (name, description) => {
  params.push({
    name,
    description,
    caller: 'AddVariadicParams',
  });
};

const AddCondition = (id, flags, list_name, category, display_string, description, script_name) => {
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
};

const AddAction = (id, flags, list_name, category, display_string, description, script_name) => {
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
};

const AddExpression = (id, flags, list_name, category, expression_name, description) => {
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
};

const Property = class {
  constructor(flags, key, initial_str, description, param, readonly) {
    properties.push({
      flags,
      key,
      initial_str,
      description,
      params: param ? param.split('|') : [],
      readonly,
    });
  }
};

const cr    = {};
cr.Property = Property;

const ACESDone = () => {
};

const assert2 = () => {
  return false;
};
