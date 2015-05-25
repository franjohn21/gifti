var express = require('express');
var router = express.Router();

module.exports = function(models, controllers){
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });
  router.get('/gifts', controllers.gifts.getGifts);
  router.post('/gifts', controllers.gifts.createGift);
  return router;
}
