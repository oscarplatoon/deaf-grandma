let bye = 0;

console.log("HEY KID!");
function deafGrandma() {
  // npm install prompt -g
  let prompt = require('prompt');

  prompt.start();
  
  prompt.get(['userInput'], function (err, result) {
    if (result.userInput === "") {
      console.log("WHAT?!");
      deafGrandma();
    } else if (result.userInput === "GOODBYE!" && bye === 1) {
      console.log("LATER SKATER");
    } else if (result.userInput === "GOODBYE!") {
      console.log("LEAVING SO SOON?");
      bye++;
      deafGrandma();
    }  else if (result.userInput === result.userInput.toUpperCase()) {
      console.log("NO, NOT SINCE 1946!");
      deafGrandma();
    } else {
      console.log("SPEAK UP, KID!");
      deafGrandma();
    }
  });
    
}

deafGrandma();