// Node Packages
var fs = require("fs");

// link modules
var ClozeCard  = require("./ClozeCard.js");

var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};


var firstPresident = new BasicCard ("Who was the first President of the United States", "George Washington");

var currentPresident = new BasicCard("Who is the current President of the United States", "Donald Trump");

var presidentHome = new BasicCard("Where does the president of the United States live", "The White House");



module.exports = BasicCard;