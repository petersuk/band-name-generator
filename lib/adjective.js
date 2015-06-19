var Adjective = ["sleepy", "fuzzy", "cranky", "soporific", "eloquent"];

var getRandomWord = require("./lib/getRandomWord");
var Adjective = require("./lib/adjective.js");

module.exports = function(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
};
