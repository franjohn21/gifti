'use strict';
module.exports = function(models){
  var Gift = models.Gift;
  return {
    getGifts: getGifts
  };

  function getGifts(req, res, next){
    Gift.findAsync()
      .then(function(gifts){
        res.json(gifts);
      })
      .catch(function(err){
        console.trace(err);
        res.status(500).send('Error getting gifts');
      });
  }

  function createGift(req, res, next){
    
  }
};