'use strict';
define(['app/router', 'jquery'], function (Router, $){
  return {
    initialize: function(){
      $.ajaxPrefilter(function(options){
        options.url = 'http://localhost:9393' + options.url;
      });

      Router.initialize();
    }
  }
});