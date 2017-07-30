// Node Packages
var fs = require("fs");
var inquirer = require("inquirer");

// link modules
//var ClozeCard  = require("./ClozeCard.js");

function basicCardCreator() {

	var BasicCard = function(front, back) {
	  this.front = front;
	  this.back = back;
	};

	BasicCard.prototype.printInfo = function() {
	  console.log("Basic Card" + "\nCard Front: " + this.front +
	  	"\nCard Back: " + this.back);
	  console.log("---------------");
	};


	var count = 0;
	// array in which we will store the Basic Cards
	var basicCardArray = [];

	var createBasicCard = function() {

	  if (count < 5) {
	    console.log("New Basic Card");

	    inquirer.prompt([
		  {
		    type: 'input',
		    name: 'front',
		    message: 'Enter the Question (front of the card)',
		    validate: function(input) {
               if (input === '') {
                   console.log('Please provide a Question');
                   return false;
               } else {
                   return true;
                  }
            }
		  },
		  {
		    type: 'input',
		    name: 'back',
		    message: 'Enter the Answer (back of the card)',
		    validate: function(input) {
               if (input === '') {
                   console.log('Please provide an Answer');
                   return false;
               } else {
                   return true;
                 }
            }
		  },
	    ]).then(function(answers) {

	      var newBasicCard = new BasicCard(
	        answers.front,
	        answers.back);
	      // pushes the new basic card object into the basic cards array
	      basicCardArray.push(newBasicCard);
	      // add one to count to increment our recursive loop by one
	      count++;
	      // run the create basic card function again to create more basic cards
	   	  createBasicCard();	
	    });
	    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
	  }
	  else {
	    for (var x = 0; x < basicCardArray.length; x++) {
	      basicCardArray[x].printInfo();
	    }
	  }
	};

	// call the function to start creating basic cards
	createBasicCard();

} //end basicCardCreator function
module.exports = {basicCardCreator};