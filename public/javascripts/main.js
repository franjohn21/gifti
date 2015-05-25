'use strict';
define(['app/router', 'jquery'], function (Router, $){
  return {
    initialize: function(){
      $.ajaxPrefilter(function(options){
        options.url = 'https://gifti.herokuapp.com' + options.url;
      });

      Router.initialize();
    }
  }
});