module.exports = {
  //Given a string will return the string with first letter uppercased
  capitalize: function(string){
    return string && string[0].toUpperCase() + string.slice(1);
  }

}