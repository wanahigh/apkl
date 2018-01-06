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
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/facebook-config-ui/template.facebook_configure.js          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       // 1
Template.__checkName("configureLoginServiceDialogForFacebook");        // 2
Template["configureLoginServiceDialogForFacebook"] = new Template("Template.configureLoginServiceDialogForFacebook", (function() {
  var view = this;                                                     // 4
  return [ HTML.Raw("<p>\n    First, you'll need to register your app on Facebook. Follow these steps:\n  </p>\n  "), HTML.OL("\n    ", HTML.Raw('<li>\n      Visit <a href="https://developers.facebook.com/apps" target="_blank">https://developers.facebook.com/apps</a>\n    </li>'), "\n    ", HTML.Raw('<li>\n      Click "Add a New App".\n    </li>'), "\n    ", HTML.Raw('<li>\n      Add a "Display Name" for your app and click on "Create App ID".\n    </li>'), "\n    ", HTML.Raw('<li>\n      Answer the "Security Check" CAPTCHA and click on "Submit".\n    </li>'), "\n    ", HTML.Raw('<li>\n      When the new app dashboard loads, click on "Settings" in the left hand menu.\n    </li>'), "\n    ", HTML.Raw('<li>\n      From the top of the "Basic" settings page, note down your "App ID" and "App Secret" (you will be asked for them at the bottom of this popup).\n    </li>'), "\n    ", HTML.Raw('<li>\n      Click on the "Add Platform" button, and select "Website".\n    </li>'), "\n    ", HTML.LI('\n      In the "Website" section, set the "Site URL" to ', HTML.SPAN({
    class: "url"                                                       // 6
  }, Blaze.View("lookup:siteUrl", function() {                         // 7
    return Spacebars.mustache(view.lookup("siteUrl"));                 // 8
  })), ' and click on "Save Changes".\n    '), "\n    ", HTML.Raw('<li>\n      Click on "Add Product" in the left hand menu.\n    </li>'), "\n    ", HTML.Raw('<li>\n      Hover over "Facebook Login", click on "Set Up".\n    </li>'), "\n    ", HTML.Raw('<li>\n      Click on "Facebook Login > Settings" from the left hand menu.\n    </li>'), "\n    ", HTML.LI('\n      Set "Valid OAuth redirect URIs" to ', HTML.SPAN({
    class: "url"                                                       // 10
  }, Blaze.View("lookup:siteUrl", function() {                         // 11
    return Spacebars.mustache(view.lookup("siteUrl"));                 // 12
  }), "_oauth/facebook"), ' and click on "Save Changes".\n    '), "\n    ", HTML.Raw('<li>\n      Select "App Review" from the left hand menu.\n    </li>'), "\n    ", HTML.Raw('<li>\n      Toggle the "Make app public" switch to "Yes".\n    </li>'), "\n    ", HTML.Raw('<li>\n      Select a "Category" in the "Make app public" popup and click on "Confirm".\n    </li>'), "\n  ") ];
}));                                                                   // 14
                                                                       // 15
/////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/facebook-config-ui/facebook_configure.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.configureLoginServiceDialogForFacebook.helpers({              // 1
  siteUrl: function () {                                               // 2
    return Meteor.absoluteUrl();                                       // 3
  }                                                                    // 4
});                                                                    // 5
                                                                       // 6
Template.configureLoginServiceDialogForFacebook.fields = function () {
  return [                                                             // 8
    {property: 'appId', label: 'App ID'},                              // 9
    {property: 'secret', label: 'App Secret'}                          // 10
  ];                                                                   // 11
};                                                                     // 12
                                                                       // 13
/////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['facebook-config-ui'] = {};

})();
