//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"zodiase:check":{"check.js":function(){

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// packages/zodiase_check/check.js                                      //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
                                                                        //
// Keep a reference to the old check.                                   // 1
var _check = check; // According to https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#2-unsupported-syntax,
// refacor try-catch block to make the containing function optimizable.
                                                                        //
var nonoptimizableTryCatchBlock = function (value, pattern, message) {  // 5
  try {                                                                 // 6
    _check(value, pattern);                                             // 7
  } catch (error) {                                                     // 8
    throw new Match.Error(message);                                     // 9
  }                                                                     // 10
};                                                                      // 11
                                                                        //
check = function (value, pattern, message) {                            // 12
  if (typeof message === 'undefined') {                                 // 13
    _check(value, pattern);                                             // 14
  } else {                                                              // 15
    nonoptimizableTryCatchBlock(value, pattern, message);               // 16
  }                                                                     // 17
};                                                                      // 18
//////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/zodiase:check/check.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['zodiase:check'] = {}, {
  check: check
});

})();
