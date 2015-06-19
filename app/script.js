'use strict';

$(function() {

  $("button").click(function() {
    $.get("http://localhost:3000/adjective", function(response) {
      $("#adjective").text(response);
    });
    $.get("http://localhost:3000/verb", function(response) {
      $("#verb").text(response);
    });
    $.get("http://localhost:3000/noun", function(response) {
      $("#noun").text(response);
    });
  });

});

$("form").on("submit", function(e) {
    e.preventDefault();
 });

$("#submitWords").on("submit", function(e) {
  e.preventDefault();
  var adjective = $("[name=adjective]").val();
  var adjPost;

  if (adjective) {
    adjPost = {word: adjective};
    console.log(name);
    $.post("adjective", adjPost, function(response) {
      var adjectiveRes = response.msg;
      $("#adjectiveRes").text(adjectiveRes);
    });
  }

});
