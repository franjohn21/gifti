define([
  'backbone', 
  'underscore',
  'jquery',
  'text!templates/gifts/createGift.html',
  'models/GiftModel'
  ], function(Backbone, _, $, createGiftForm, GiftModel){
  var NewGift = Backbone.View.extend({
    el: $("#view"),
    initialize: function(collection){
      this.collection = collection;
    },
    render: function(){
      this.$el.html(createGiftForm);
      this.$el.find('#createGiftForm').submit(this.create.bind(this));
    },
    create: function(e){
      e.preventDefault();
      var $form = $(e.target);
      this.collection.create({
        name: $form.find('#name').val(),
        price: $form.find('#price').val()*100,
        url: $form.find('#url').val(),
        imageUrl: $form.find('#imageUrl').val()
      },
      {
        success: function(resp){
          console.log('what: ', resp);
          $("#success").html('Success!');
          $form.trigger('reset');
        },
        error: function(model, response, error){
          console.log(response.responseText);
          console.log(error.errorThrown);
        }
      });

    }
  });

  return NewGift;
});