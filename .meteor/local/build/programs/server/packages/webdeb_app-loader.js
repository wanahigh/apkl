(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Inject = Package['meteorhacks:inject-initial'].Inject;

(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/webdeb_app-loader/app-loader.js                                    //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
if (Meteor.isServer) {
	Inject.rawHead("loader", Assets.getText('loader.html'));
}

if (Meteor.isClient) {
	Meteor.startup(function() {
		setTimeout(function() {
			$("#inject-loader-wrapper").fadeOut(500, function() { $(this).remove(); });
		}, 500);
	});
}
/////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webdeb:app-loader'] = {};

})();
