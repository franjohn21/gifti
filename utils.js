module.exports = {
  //Given a string will return the string with first letter uppercased
  capitalize: function(string){
    return string && string[0].toUpperCase() + string.slice(1);
  },
  //Given an array and the size it will return a random sample
  getRandom: function(arr, size) {
    var copy = arr.slice(0), rand = [];
    for (var i = 0; i < size && i < copy.length; i++) {
      var index = Math.floor(Math.random() * copy.length);
      rand.push(copy.splice(index, 1)[0]);
    }
    return rand;
  },
  //Given an object this will return whether the object is empty
  isEmptyObject: function(obj) {
    return !Object.keys(obj).length;
  }
}