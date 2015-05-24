'use strict';
(function controller(Backbone, $){
  $.ajaxPrefilter(function(options){
    options.url = 'http://localhost:9393' + options.url;
  });


  var Gifts = Backbone.Collection.extend({
    url: '/gifts'
  });

  var GiftList = Backbone.View.extend({
    el: '.gifts',
    render: function(){
      var gifts = new Gifts();
      gifts.fetch({    
        success: function(gifts){  
          console.log(gifts.models);
          var template = '<% console.log(gifts) %><ul> Testing <% _.each(gifts, function(gift){ %><li><%= gift.get(\'name\') %></li><% }) %></ul>';

          var tpl = _.template(template, {gifts: 'gifts.models'})
          this.$el.html(tpl);
        }.bind(this)
      });
    }
  });

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home'
    }
  });
  var giftList = new GiftList();
  var router = new Router();
  router.on('route:home', function(){
    giftList.render();
  });

  Backbone.history.start();


})(Backbone, $);