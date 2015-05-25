'use strict';
module.exports = function(models){
  var Gift = models.Gift;
  var utils = require('../utils');
  return {
    getGifts: getGifts,
    createGift: createGift
  };

  function getGifts(req, res, next){
    Gift.findAsync()
      .then(function(gifts){
        //Simulate (for now) algorithm picking gifts by returning random gifts
        if(!utils.isEmptyObject(req.query))
          gifts = utils.getRandom(gifts, 5)
        res.json(gifts);
      })
      .catch(function(err){
        console.trace(err);
        res.status(500).send(err.message);
      });
  }

  function createGift(req, res, next){
    Gift.createAsync(req.body)
      .then(function(gift){
        res.json(gift);
      })
      .catch(function(err){
        console.trace(err);
        res.status(500).send(err.message);
      });
  }
};