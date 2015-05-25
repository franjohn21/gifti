// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
  baseUrl: 'lib',
  paths: {
      templates: '../templates',
      collections: '../javascripts/collections',
      models: '../javascripts/models',
      views: '../javascripts/views',
      app: '../javascripts'
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    }
  }
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['app/main'], function(App){
  App.initialize();
});