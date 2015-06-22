'use strict';

var Adjective = function() {
  this.sleepy = true;
  this.fuzzy = true;
  this.cranky = true;
  this.soporific = true;
  this.eloquent = true;
  this.shiny = true;
  this.fuzzy = true;
  this.shallow = true;
  this.chief = true;
  this.wonderful = true;
  this.plucky = true;
  this.woozy = true;
  this.shrill = true;
  this.complex = true;
  this.attractive = true;
};

module.exports = Adjective;
module.exports = function(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
};
