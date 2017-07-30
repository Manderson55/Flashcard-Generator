var fs = require("fs");
var inquirer = require("inquirer");

// link modules
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

inquirer
  .prompt([
     {type: "list",
      message: "What do you want to do?",
      choices: ["Create Basic Cards", "Create Cloze Cards"],
 //     choices: ["Create Basic Cards", "Create Cloze Cards", "Play a Game"],
      name: "command"
    }
 ])
  .then(function(inquirerResponse) {
      if (inquirerResponse.command === "Create Basic Cards"){
        BasicCard.basicCardCreator();

      } else
      if (inquirerResponse.command === "Create Cloze Cards"){
        ClozeCard.clozeCardCreator();
        
      // } else    
      // if (inquirerResponse.command === "Play a Game"){
      //   movies.movieThis(); 
      }
    }); //end function(inquirerResponse)




