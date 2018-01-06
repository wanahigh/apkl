(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;

/* Package-scope variables */
var BaseModel, Model;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/channikhabra_stupid-models/packages/channikhabra_stupid-models.js                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/channikhabra:stupid-models/lib/base_model.js                                                       //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
BaseModel = {                                                                                                  // 1
  errors: {},                                                                                                  // 2
                                                                                                               // 3
  db: function() {                                                                                             // 4
    if(this._local) return this.collection._collection;                                                        // 5
    else return this.collection;                                                                               // 6
  },                                                                                                           // 7
  persist: function() {                                                                                        // 8
    this.db().remove(this._id);                                                                                // 9
    delete this._local;                                                                                        // 10
    delete this._id;                                                                                           // 11
    this.save();                                                                                               // 12
  },                                                                                                           // 13
  store: function() {                                                                                          // 14
    this._local = true;                                                                                        // 15
    this.save();                                                                                               // 16
  },                                                                                                           // 17
  save: function(cb) {                                                                                         // 18
    var attributes = this.getMongoAttributes();                                                                // 19
    return this._upsert(attributes, cb);                                                                       // 20
  },                                                                                                           // 21
  _upsert: function(attributes, cb) {                                                                          // 22
    if(this._id) return this.update(attributes, cb);                                                           // 23
    else return this.insert(attributes, cb);                                                                   // 24
  },                                                                                                           // 25
  insert: function(attributes, cb) {                                                                           // 26
    attributes = this.prepareDefaults(attributes);                                                             // 27
    this._id = this.db().insert(attributes, cb);                                                               // 28
    this.refresh();                                                                                            // 29
                                                                                                               // 30
    return this._id;                                                                                           // 31
  },                                                                                                           // 32
  update: function(attributes, cb) {                                                                           // 33
    this.db().update(this._id, {$set: attributes}, cb);                                                        // 34
    this.refresh();                                                                                            // 35
                                                                                                               // 36
    return this._id;                                                                                           // 37
  },                                                                                                           // 38
  increment: function(attVal) {                                                                                // 39
    this.db().update(this._id, {$inc: attVal});                                                                // 40
    this.refresh();                                                                                            // 41
                                                                                                               // 42
    return this._id;                                                                                           // 43
  },                                                                                                           // 44
  push: function(attVal) {                                                                                     // 45
    this.db().update(this._id, {$push: attVal});                                                               // 46
  },                                                                                                           // 47
  pop: function(att) {                                                                                         // 48
    this.db().update(this._id, {$pop: {att: 1}});                                                              // 49
  },                                                                                                           // 50
  shift: function(att) {                                                                                       // 51
    this.db().update(this._id, {$pop: {att: -1}});                                                             // 52
  },                                                                                                           // 53
  remove: function() {                                                                                         // 54
    this.db().remove(this._id);                                                                                // 55
  },                                                                                                           // 56
  refresh: function(){                                                                                         // 57
    this.extend(this.getMongoAttributes(this.collection().findOne(this._id)));                                 // 58
  },                                                                                                           // 59
  prepareDefaults: function(attributes){                                                                       // 60
    var object = {};                                                                                           // 61
    _.extend(object, this.defaultValues, attributes);                                                          // 62
    return object;                                                                                             // 63
  },                                                                                                           // 64
  getMongoAttributes: function(includeId) {                                                                    // 65
    var mongoValues = {};                                                                                      // 66
    for(var prop in this) {                                                                                    // 67
      if(this.isMongoAttribute(prop)) mongoValues[prop] = this[prop];                                          // 68
    }                                                                                                          // 69
                                                                                                               // 70
    if(includeId) mongoValues._id = this._id;                                                                  // 71
                                                                                                               // 72
    return mongoValues;                                                                                        // 73
  },                                                                                                           // 74
  isMongoAttribute: function(prop) {                                                                           // 75
    if(_.isFunction(this[prop])) return false;                                                                 // 76
    if(prop == '_id' || prop == 'errors' || prop == 'defaultValues' || prop == 'collectionName') return false; // 77
    return true;                                                                                               // 78
  },                                                                                                           // 79
  time: function(field) {                                                                                      // 80
    return moment(this[field]).format("MM/DD - h:mma");                                                        // 81
  },                                                                                                           // 82
  extend: function(doc) {                                                                                      // 83
    doc = doc != undefined && _.isObject(doc) ? doc : {};                                                      // 84
                                                                                                               // 85
    _.extend(this, doc);                                                                                       // 86
  },                                                                                                           // 87
  delete: function(noAfterDelete) {                                                                            // 88
    this.db().remove(this._id);                                                                                // 89
    if(this.afterDelete && !noAfterDelete) this.afterDelete();                                                 // 90
  }                                                                                                            // 91
};                                                                                                             // 92
                                                                                                               // 93
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/channikhabra:stupid-models/lib/model_factory.js                                                    //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
/**                                                                                                            // 1
 * Model factory which should be used for creating new models                                                  // 2
 */                                                                                                            // 3
                                                                                                               // 4
function SmartModel() {};                                                                                      // 5
SmartModel.prototype = BaseModel;                                                                              // 6
                                                                                                               // 7
Model = function(collection) {                                                                                 // 8
  function ChildModel() {}; //by using 'new' below, we avoid adding methods to BaseModel object                // 9
  ChildModel.prototype = new SmartModel; //because a new instance is created, creating a new object            // 10
  //while still maintaining the link to inherited methods. This is the trick to avoiding conflicts.            // 11
                                                                                                               // 12
                                                                                                               // 13
  ChildModel.extend = function(methods) {                                                                      // 14
    _.extend(ChildModel.prototype, methods, methods.defaultValues); //methods not added 2 BaseModel            // 15
    ChildModel.prototype.defaultValues = null;                                                                 // 16
    ChildModel.prototype.collection = collection;                                                              // 17
  };                                                                                                           // 18
                                                                                                               // 19
  collection._transform = function(doc) {                                                                      // 20
    var instance = new ChildModel; //instance methods will be linked to ChildModel's prototype                 // 21
    _.extend(instance, doc); //shared ChildModel.prototype will not be overwritten because of 'new'            // 22
    return instance; //however, chain lookup will be efficiently utilized if property not found ;)             // 23
  };                                                                                                           // 24
                                                                                                               // 25
  return  ChildModel; //usage: 'new ChildModel'; inherited methods linked via prototype above                  // 26
};                                                                                                             // 27
                                                                                                               // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['channikhabra:stupid-models'] = {}, {
  Model: Model
});

})();
