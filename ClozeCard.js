// Node Packages
var fs = require("fs");
var inquirer = require("inquirer");

// link modules
//var BasicCard = require("./BasicCard.js");

function clozeCardCreator() {

	var ClozeCard = function(fullText, cloze) {
	   if ( this instanceof ClozeCard) {
		  this.fullText = fullText;
		  this.cloze = cloze;  	
		  this.partial = this.fullText.replace(this.cloze, "______");
		} else {
		  return new ClozeCard(fullText, cloze);
		}

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
		    message: 'Enter the Question/Statement',
		    validate: function(input) {
               if (input === '') {
                   console.log('Please provide the Question/Statement');
                   return false;
               } else {
                   return true;
                 }
            }
		  },
		  {
		    type: 'input',
		    name: 'cloze',
		    message: 'Enter the cloze Text (has to be part of Question/Statement)',
		    validate: function(input) {
               if (input === '') {
                   console.log('Please provide the cloze');
                   return false;
               } else {
                   return true;
                 }
            }
		  },
	    ]).then(function(answers) {

            if (answers.fullText.includes(answers.cloze)) {
	      		var newClozeCard = new ClozeCard(
	        		answers.fullText,
	        		answers.cloze,
	        		answers.fullText);
	      			// pushes the new Cloze card object into the Cloze cards array
	      			clozeCardArray.push(newClozeCard);
	      			// add one to count to increment our recursive loop by one
	      			count++;
	      			createClozeCard();
            } else {
                console.log('The cloze portion you provided is not found in the full text. Please try again.');
                createClozeCard();
            }
	
	    });

	  }
	  // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
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