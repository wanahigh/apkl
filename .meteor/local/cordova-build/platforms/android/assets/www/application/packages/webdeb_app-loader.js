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

(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/webdeb_app-loader/app-loader.js                                    //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
if (Meteor.isServer) {                                                         // 1
	Inject.rawHead("loader", Assets.getText('loader.html'));                      // 2
}                                                                              // 3
                                                                               // 4
if (Meteor.isClient) {                                                         // 5
	Meteor.startup(function() {                                                   // 6
		setTimeout(function() {                                                      // 7
			$("#inject-loader-wrapper").fadeOut(500, function() { $(this).remove(); });
		}, 500);                                                                     // 9
	});                                                                           // 10
}                                                                              // 11
/////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webdeb:app-loader'] = {};

})();
