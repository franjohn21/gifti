define(['backbone'], function(Backbone){
  var GiftModel = Backbone.Model.extend({
    idAttribute: '_id'
  });
  
  return GiftModel;
});