// Node Packages
var fs = require("fs");
var inquirer = require("inquirer");

// link modules
//var BasicCard = require("./BasicCard.js");

function clozeCardCreator() {

	var ClozeCard = function(fullText, cloze) {
	  this.fullText = fullText;
	  this.cloze = cloze;  	
	  this.partial = this.fullText.replace(this.cloze, "______");
	};

	ClozeCard.prototype.printInfo = function() {
	  console.log("CLOZE Card" + "\nFull Text: " + this.fullText 
	  	 + "\nQuestion/Statement: " + this.partial
	  	 + "\nCloze Text: " + this.cloze);
	  console.log("---------------");
	};

	var clozeCardArray = [];
	var count = 0;

	var createClozeCard = function() {

	  if (count < 5) {
	    console.log("New Cloze Card");

	    inquirer.prompt([
		  {
		    type: 'input',
		    name: 'fullText',
		    message: 'Enter the Question/Statement'
		  },
		  {
		    type: 'input',
		    name: 'cloze',
		    message: 'Enter the Text you want the User to guess (has to be part of the full text)'
		  },
	    ]).then(function(answers) {

	      // var partialText = answers.fullText.replace(answers.cloze, "_________"); 
	      // console.log(partialText);
	      var newClozeCard = new ClozeCard(
	        answers.fullText,
	        answers.cloze,
	        answers.fullText);
	      // pushes the new Cloze card object into the Cloze cards array
	      clozeCardArray.push(newClozeCard);
	      // add one to count to increment our recursive loop by one
	      count++;
	      // run the create Cloze card function again to create more Cloze cards
	   	  createClozeCard();	
	    });
	    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
	  }
	  else {
	    for (var x = 0; x < clozeCardArray.length; x++) {
	      clozeCardArray[x].printInfo();
	    }
	  }
	};

	// call the function to start creating Cloze cards
	createClozeCard();

} //end clozeCardCreator

module.exports = {clozeCardCreator};