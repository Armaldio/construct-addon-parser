const lang = () => {
}

class PluginProperty {}

class Info {
  SetName() {
  }

  SetDescription() {
  }

  SetVersion() {
  }

  SetCategory() {
  }

  SetAuthor() {
  }

  SetHelpUrl() {
  }

  SetIsSingleGlobal() {
  }

  SetSupportedRuntimes() {
  }

  SetProperties() {
  }
}

class IPluginBase {
  constructor() {
    this._info = new Info();
  }

  static Register() {
  }
}

const SDK    = {
  Plugins: {},
  Lang   : {
    PushContext: () => {
    },
    PopContext: () => {
    },
  },
  IPluginBase,
  PluginProperty,
};
const plugin = () =>
