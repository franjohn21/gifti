'use strict';
define([
	'jquery',
	'underscore',
	'backbone',
	'views/gift/GiftListView',
	'views/gift/CreateGiftView',
	'collections/GiftCollection',
	'views/HomeView'
	], function($, _, Backbone, GiftListView, CreateGiftView, GiftCollection, HomeView){
  	var collection;
		var Router = Backbone.Router.extend({
		  routes: {
		    '': 'home',
		    'gifts': 'displayGifts',
		    'create-gift': 'createGift',
		    '*notFound': 'notFound'
		  },
		  home: function(){
  	  	collection = new GiftCollection();
  			var homeView = new HomeView(collection);
  			this.render(homeView);
		  },
		  displayGifts: function(){
				var giftList = new GiftListView(collection);
		    this.render(giftList);
		  },
		  createGift: function(){
		  	var createGiftView = new CreateGiftView(collection);
		  	this.render(createGiftView);
		  },
		  notFound: function(){
	  		$('#view').html('Page not found!');
		  },
		  render: function(view){
		  	//Close the current view
        if (this.currentView) {
            this.currentView.undelegateEvents();
        }
        //render the new view
        view.render();
        //Set the current view
        this.currentView = view;
        return this;
		  }
	  });

	  var initialize = function(){
	  	var router = new Router();
	  	collection = new GiftCollection();

		  Backbone.history.start();
	  };

	  return {
	  	initialize: initialize
	  };

});