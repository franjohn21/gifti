define([
  'backbone', 
  'underscore',
  'jquery',
  'text!templates/homeTemplate.html',
  'text!templates/questions/gender.html',
  'text!templates/questions/recipientGender.html'
  ], function(Backbone, _, $, homeTemplate, genderTemplate, recipientGenderTemplate){
  var HomeView = Backbone.View.extend({
    el: $('#view'),
    initialize: function(collection){
      this.optionVal = 0;
      this.collection = collection
      this.optionMap = [
        {gender: genderTemplate},
        {recipientGender: recipientGenderTemplate}
      ];
      this.optionResults = {};
    },
    events: {
      'click .option': 'handleClick'
    },
    handleClick: function(e){
      var val;
      var key = Object.keys(this.optionMap[this.optionVal])[0];
      if(e.target.classList.contains('option'))
        val = e.target.getAttribute('data-value');
      else
        val = $(e.target).closest('.option').attr('data-value');
      this.optionResults[key] = val;
      if(this.optionVal < this.optionMap.length - 1)
      {
        this.optionVal += 1;
        this.setOptionText();
      }
      else {
        this.collection.url();
        this.collection.fetch({data: $.param(this.optionResults)});
        Backbone.history.navigate('gifts', true);
      }
    },
    setOptionText: function(){
      var obj = this.optionMap[this.optionVal];
      var $row = $('#option-container .row');
      $row.fadeOut(400,function(){
        $row.show();
        $row.html(obj[Object.keys(obj)[0]]);
      });
    },
    render: function(){
      this.$el.html(homeTemplate);
      this.setOptionText();
    }
  });

  return HomeView;
});