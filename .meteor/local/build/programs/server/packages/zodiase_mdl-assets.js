(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var _mdlGetAsset;

var require = meteorInstall({"node_modules":{"meteor":{"zodiase:mdl-assets":{"serve.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/zodiase_mdl-assets/serve.js                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
_mdlGetAsset = function (path) {
  return Assets.getText(path);
};
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/zodiase:mdl-assets/serve.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['zodiase:mdl-assets'] = {}, {
  _mdlGetAsset: _mdlGetAsset
});

})();

//# sourceURL=meteor://💻app/packages/zodiase_mdl-assets.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvem9kaWFzZTptZGwtYXNzZXRzL3NlcnZlLmpzIl0sIm5hbWVzIjpbIl9tZGxHZXRBc3NldCIsInBhdGgiLCJBc3NldHMiLCJnZXRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLGVBQWUsVUFBVUMsSUFBVixFQUFnQjtBQUM3QixTQUFPQyxPQUFPQyxPQUFQLENBQWVGLElBQWYsQ0FBUDtBQUNELENBRkQsQyIsImZpbGUiOiIvcGFja2FnZXMvem9kaWFzZV9tZGwtYXNzZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiX21kbEdldEFzc2V0ID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgcmV0dXJuIEFzc2V0cy5nZXRUZXh0KHBhdGgpO1xufTtcbiJdfQ==
