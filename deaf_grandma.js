var prompt = require('prompt');
  prompt.start();
  
  let counter = 0;

  function deafGrandma() {
  prompt.get(['input'], function (err, result) {
    const input = result.input;

 

  
  if (input == null) {
      console.log("WHAT?!");
  } else {
    if (input == input.toLowerCase()) {
      console.log("SPEAK UP, KID!");
      deafGrandma(); 
    } 
    if (input == "GOODBYE!") {
      counter++;
      console.log("LEAVING SO SOON?")
      deafGrandma();
    } if (input == "GOODBYE!" && counter > 0) {
      console.log("LATER, SKATER!");
    } else {
    if (input == input.toUpperCase()) {
      console.log("NO, NOT SINCE 1946!")
      deafGrandma();
      }
    } 
  }
}
  )}

  deafGrandma();
