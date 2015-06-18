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

