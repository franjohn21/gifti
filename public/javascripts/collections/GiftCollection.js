define([
  'backbone', 
  'models/GiftModel'
  ], function(Backbone, GiftModel){
  var Gifts = Backbone.Collection.extend({
    model: GiftModel,
    url: function(url){
      return url ? url : '/gifts';
    },
    initialize: function(){
      this.fetch();
    },
  });

  return Gifts;
});