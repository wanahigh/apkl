(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var check = Package.check.check;
var Match = Package.check.Match;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"zodiase:check":{"check.js":function(){

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// packages/zodiase_check/check.js                                      //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
                                                                        //
// Keep a reference to the old check.
let _check = check; // According to https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#2-unsupported-syntax,
// refacor try-catch block to make the containing function optimizable.

let nonoptimizableTryCatchBlock = function (value, pattern, message) {
  try {
    _check(value, pattern);
  } catch (error) {
    throw new Match.Error(message);
  }
};

check = function (value, pattern, message) {
  if (typeof message === 'undefined') {
    _check(value, pattern);
  } else {
    nonoptimizableTryCatchBlock(value, pattern, message);
  }
};
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

//# sourceURL=meteor://💻app/packages/zodiase_check.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvem9kaWFzZTpjaGVjay9jaGVjay5qcyJdLCJuYW1lcyI6WyJfY2hlY2siLCJjaGVjayIsIm5vbm9wdGltaXphYmxlVHJ5Q2F0Y2hCbG9jayIsInZhbHVlIiwicGF0dGVybiIsIm1lc3NhZ2UiLCJlcnJvciIsIk1hdGNoIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBSUEsU0FBU0MsS0FBYixDLENBQ0E7QUFDQTs7QUFDQSxJQUFJQyw4QkFBOEIsVUFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQ25FLE1BQUk7QUFDRkwsV0FBT0csS0FBUCxFQUFjQyxPQUFkO0FBQ0QsR0FGRCxDQUVFLE9BQU9FLEtBQVAsRUFBYztBQUNkLFVBQU0sSUFBSUMsTUFBTUMsS0FBVixDQUFnQkgsT0FBaEIsQ0FBTjtBQUNEO0FBQ0YsQ0FORDs7QUFPQUosUUFBUSxVQUFVRSxLQUFWLEVBQWlCQyxPQUFqQixFQUEwQkMsT0FBMUIsRUFBbUM7QUFDekMsTUFBSSxPQUFPQSxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDTCxXQUFPRyxLQUFQLEVBQWNDLE9BQWQ7QUFDRCxHQUZELE1BRU87QUFDTEYsZ0NBQTRCQyxLQUE1QixFQUFtQ0MsT0FBbkMsRUFBNENDLE9BQTVDO0FBQ0Q7QUFDRixDQU5ELEMiLCJmaWxlIjoiL3BhY2thZ2VzL3pvZGlhc2VfY2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvbGQgY2hlY2suXG5sZXQgX2NoZWNrID0gY2hlY2s7XG4vLyBBY2NvcmRpbmcgdG8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzItdW5zdXBwb3J0ZWQtc3ludGF4LFxuLy8gcmVmYWNvciB0cnktY2F0Y2ggYmxvY2sgdG8gbWFrZSB0aGUgY29udGFpbmluZyBmdW5jdGlvbiBvcHRpbWl6YWJsZS5cbmxldCBub25vcHRpbWl6YWJsZVRyeUNhdGNoQmxvY2sgPSBmdW5jdGlvbiAodmFsdWUsIHBhdHRlcm4sIG1lc3NhZ2UpIHtcbiAgdHJ5IHtcbiAgICBfY2hlY2sodmFsdWUsIHBhdHRlcm4pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBNYXRjaC5FcnJvcihtZXNzYWdlKTtcbiAgfVxufTtcbmNoZWNrID0gZnVuY3Rpb24gKHZhbHVlLCBwYXR0ZXJuLCBtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfY2hlY2sodmFsdWUsIHBhdHRlcm4pO1xuICB9IGVsc2Uge1xuICAgIG5vbm9wdGltaXphYmxlVHJ5Q2F0Y2hCbG9jayh2YWx1ZSwgcGF0dGVybiwgbWVzc2FnZSk7XG4gIH1cbn07XG4iXX0=
