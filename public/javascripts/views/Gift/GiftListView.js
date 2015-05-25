define([
  'backbone', 
  'underscore', 
  'jquery',
  'text!templates/gifts/giftList.html'
  ], function(Backbone, _, $, giftListTemplate){
  var GiftList = Backbone.View.extend({
    el: $('#view'),
    initialize: function(collection){
      this.collection = collection;
      this.collection.on('sync', function(){
        this.render();
      }.bind(this))
    },
    render: function(){
      var tpl = _.template(giftListTemplate)({gifts: this.collection.models});
      this.$el.hide();
      this.$el.html(tpl);
      this.$el.fadeIn();
    }
  });

  return GiftList;
});