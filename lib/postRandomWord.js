'use strict';

module.exports = function postRandomWord(word, object) {
  if (object.hasOwnProperty(word)) {
    return {msg: word + ' is already in the word bank.'};
  } else {
    object[word] = true;
    return {msg: word + ' has been added to the word bank.'};
  }
};
