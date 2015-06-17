'use strict';

$(function() {
  Your Answer:
  var arr = ["Mike","Erica","Alex"];

  function getName(){
    document.getElementById("names").innerHTML = arr[Math.floor(Math.random() * arr.length)]
  }

});
