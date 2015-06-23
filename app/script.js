'use strict';

$(function() {
  $('#button').on('click', function() {
    $('#bandadj').text = '';
    $('#bandnoun').text = '';
    $('#bandverb').text = '';

    $.get('/adjective', function(response) {
      var adjective = response.word;
      $('#bandadj').text(adjective + ' ');
    });

    $.get('/verb', function(response) {
      var verb = response.word;
      $('#bandverb').text(verb + ' ');
    });

    $.get('/noun', function(response) {
      var noun = response.word;
      $('#bandnoun').text(noun + ' ');
    });
  });
});

$('#submitWord').on('submit', function(e) {
  e.preventDefault();

  var adjective = $('#user-adjective').val();
  var adjPost;

  console.log(adjective);

  var verb = $('#user-verb').val();
  var verbPost;

  console.log(verb);

  var noun = $('#user-noun').val();
  var nounPost;

  console.log(noun);

  if (adjective) {
    adjPost = {word: adjective};

    $.post('adjective', adjPost, function(response) {
      var adjectiveRes = response.msg;
      $('#adjectiveRes').text(adjectiveRes);
    });
  }

  if (verb) {
    verbPost = {word: verb};

    $.post('verb', verbPost, function(response) {
      var verbRes = response.msg;
      $('#verbRes').text(verbRes);
    });
  }

  if (noun) {
    nounPost = {word: noun};

    $.post('noun', nounPost, function(response) {
      var nounRes = response.msg;
      $('#nounRes').text(nounRes);
    });
  }

});
