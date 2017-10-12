import { Haiku } from './../js/haiku.js';
import { RandomHaiku } from './../js/random-haiku.js';

$(document).ready(function(){
  let randomHaiku = new RandomHaiku();
  randomHaiku.generateHaiku();
  $("#randLine1").text(`${randomHaiku.line1.charAt(0).toUpperCase()}${randomHaiku.line1.slice(1)}`);
  $("#randLine2").text(`${randomHaiku.line2.charAt(0).toUpperCase()}${randomHaiku.line2.slice(1)}`);
  $("#randLine3").text(`${randomHaiku.line3.charAt(0).toUpperCase()}${randomHaiku.line3.slice(1)}`)

  $("#haikuForm").submit(function(event){
    event.preventDefault();
    let line1 = $("#line1").val();
    let line2 = $("#line2").val();
    let line3 = $("#line3").val();
    let newHaiku = new Haiku(line1, line2, line3);

    if (newHaiku.haikuChecker()) {
      alert('Your Haiku Was Saved!');
      let myDiv = document.getElementById('myDiv');
      let newContent = document.createElement('div');
      newContent.className = "carousel-item";
      newContent.innerHTML = '<h4>' + line1 + '</h4>' + '<h4>' + line2 + '</h4>' + '<h4>' + line3 + '</h4>';
      myDiv.appendChild(newContent);
    } else {
      alert('That ain\'t a haiku!');
    }
  });

  $("#randButton").click(function(event) {
    event.preventDefault();
    randomHaiku.generateHaiku();
    $("#randLine1").text(`${randomHaiku.line1.charAt(0).toUpperCase()}${randomHaiku.line1.slice(1)}`);
    $("#randLine2").text(`${randomHaiku.line2.charAt(0).toUpperCase()}${randomHaiku.line2.slice(1)}`);
    $("#randLine3").text(`${randomHaiku.line3.charAt(0).toUpperCase()}${randomHaiku.line3.slice(1)}`);

    $("#saveButton").click(function(event) {
      event.preventDefault();
      alert('Your Haiku Was Saved!');
      let line1 = `${randomHaiku.line1.charAt(0).toUpperCase()}${randomHaiku.line1.slice(1)}`;
      let line2 = `${randomHaiku.line2.charAt(0).toUpperCase()}${randomHaiku.line2.slice(1)}`;
      let line3 = `${randomHaiku.line3.charAt(0).toUpperCase()}${randomHaiku.line3.slice(1)}`;
      let myDiv = document.getElementById('myDiv');
      let newContent = document.createElement('div');
      newContent.className = "carousel-item";
      newContent.innerHTML = '<h4>' + line1 + '</h4>' + '<h4>' + line2 + '</h4>' + '<h4>' + line3 + '</h4>';
      myDiv.appendChild(newContent);
    });
  });
});
