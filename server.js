'use strict';

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/app/"));

var Verb = ["overflow", "scare", "taste", "squash", "applaud"];

var Noun = ["house", "bucket", "cut", "headphones", "lighter"];

var adjective = new Adjective();

var verb = new Verb();
function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

var noun = new Noun();
function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

function postWord (word, wordObject) {
  if (object.hasOwnProperty(word)
  {
    return{msg: "Thanks for trying! We already have that word"}

  } else {
    object[word] = true;
    return{msg: "Thanks for submitting your awesome word, " + word + "!"}
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + word + '!'};
};

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get("/verb", function(req, res) {
  res.json(getRandomWord(verb));
});

app.get("/noun", function(req, res) {
  res.json(getRandomWord(noun));
});

app.post("/adjective", function(req, res) {
  console.log(req.body.word, adjective);
  res.json.word
});

app.listen(port, function() {
  console.log("server starting. available at http://localhost: " + port);
});

