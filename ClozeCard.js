// Node Packages
var fs = require("fs");
var inquirer = require("inquirer");

// link modules
var BasicCard = require("./BasicCard.js");

var ClozeCard = function(err, text, cloze) {
  this.cloze = cloze;
  this.partial = partial;
  this.fullText = fullText;
};


var firstPresident = new BasicCard ("Who was the first President of the United States", "George Washington");












module.exports = ClozeCard;