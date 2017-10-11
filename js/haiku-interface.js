var Haiku = require('./../js/haiku.js').haikuModule;
var RandomHaiku = require('./../js/random-haiku.js').randomHaikuModule;

$(document).ready(function(){
  var newHaiku = new Haiku();
  $("#haikuForm").submit(function(event){
    event.preventDefault();
    newHaiku.line1 = $("#line1").val();
    newHaiku.line2 = $("#line2").val();
    newHaiku.line3 = $("#line3").val();

    if (newHaiku.haikuChecker()) {
      alert('This is a haiku!')
    } else {
      alert('That ain\'t a haiku!')
    }
  });
});
