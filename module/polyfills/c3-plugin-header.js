let pluginClass;

const lang = (str) => {
  return str;
};

class PluginProperty {
  constructor(type, id, initialValue_or_options) {
    this.type                    = type;
    this.id                      = id;
    this.initialValue_or_options = initialValue_or_options;
  }
}

class Info {
  constructor(props) {
    this.name              = '';
    this.description       = '';
    this.version           = '';
    this.category          = '';
    this.author            = '';
    this.helpUrl           = '';
    this.isSingleGlobal    = false;
    this.supportedRuntimes = [];
    this.properties        = [];
    this.type              = '';
    this.isResizable       = false;
    this.isRotatable       = false;
    this.icon              = {
      url : '',
      type: '',
    };
    this.hasImage          = false;
    this.url               = '';
    this.isTiled           = false;
    this.isDeprecated      = false;
    this.supportsEffects   = false;
    this.mustPreDraw       = false;
    this.canBeBundled      = false;
    this.cordovaPlugins    = [];
    this.dependencies      = [];
    this.remoteScripts     = [];
    this.usesJquery        = false;
    this.domSideScripts    = [];
  }

  SetName(name) {
    this.name = name;
  }

  SetDescription(description) {
    this.description = description;
  }

  SetVersion(version) {
    this.version = version;
  }

  SetCategory(category) {
    this.category = category;
  }

  SetAuthor(author) {
    this.author = author;
  }

  SetHelpUrl(helpUrl) {
    this.helpUrl = helpUrl;
  }

  SetIsSingleGlobal(isSingleGlobal) {
    this.isSingleGlobal = isSingleGlobal;
  }

  SetSupportedRuntimes(supportedRuntimes) {
    this.supportedRuntimes = supportedRuntimes;
  }

  SetProperties(properties) {
    this.properties = properties;
  }

  SetPluginType(type) {
    this.type = type;
  }

  SetIcon(url, type) {
    this.icon.url  = url;
    this.icon.type = type;
  }

  SetIsResizable(isResizable) {
    this.isResizable = isResizable;
  }

  SetIsRotatable(isRotatable) {
    this.isRotatable = isRotatable;
  }

  SetHasImage(hasImage) {
    this.hasImage = hasImage;
  }

  SetDefaultImageURL(url) {
    this.url = url;
  }

  SetIsTiled(isTiled) {
    this.isTiled = isTiled;
  }

  SetIsDeprecated(isDeprecated) {
    this.isDeprecated = isDeprecated;
  }

  SetSupportsEffects(supportsEffects) {
    this.supportsEffects = supportsEffects;
  }

  SetMustPreDraw(mustPreDraw) {
    this.mustPreDraw = mustPreDraw;
  }

  SetCanBeBundled(canBeBundled) {
    this.canBeBundled = canBeBundled;
  }

  AddCommonPositionACEs() {

  }

  AddCommonSizeACEs() {

  }

  AddCommonAngleACEs() {

  }

  AddCommonAppearanceACEs() {

  }

  AddCommonZOrderACEs() {

  }

  AddCordovaPluginReference(cordovaPlugins) {
    this.cordovaPlugins.push(cordovaPlugins);
  }

  AddFileDependency(dependencies) {
    this.dependencies.push(dependencies);
  }

  AddRemoteScriptDependency(remoteScripts) {
    this.remoteScripts.push(remoteScripts);
  }

  SetUsesJquery(usesJquery) {
    this.usesJquery = usesJquery;
  }

  SetDOMSideScripts(domSideScripts) {
    this.domSideScripts = domSideScripts;
  }
}

class IPluginBase {
  constructor() {
    this._info = new Info();
  }

  get settings() {
    return this._info;
  }

  static Register(id, plugin) {
    pluginClass = new plugin();
  }
}

const SDK = {
  Plugins: {},
  Lang   : {
    PushContext: () => {
    },
    PopContext : () => {
    },
  },
  IPluginBase,
  PluginProperty,
};

const plugin = () =>
