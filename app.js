var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Promise = require('bluebird');
var fs = require('fs');
var utils = require('./utils');
var models = {}, controllers = {};
Promise.promisifyAll(mongoose);

console.out = require('tracer').colorConsole({
  format : [
    "({{file}}:{{line}}) {{message}}"
  ]
}).info;
var db = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/gifti';
mongoose.connect(db);

fs.readdirSync(__dirname + '/models').forEach(function(fileName){
	if(~fileName.indexOf('js'))
		models[utils.capitalize(fileName.replace('.js', ''))] = require(__dirname + '/models/' + fileName );
});

fs.readdirSync(__dirname +'/controllers').forEach(function(fileName){
	if(~fileName.indexOf('js'))
		controllers[fileName.replace('.js', '')] = require(__dirname + '/controllers/' + fileName )(models);
});
var routes = require('./routes/index')(models, controllers);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next){
	console.out('METHOD: ', req.method, ', URL: ', req.url);
	next();
})
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
