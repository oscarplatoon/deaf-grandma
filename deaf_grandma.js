
let inputCount = 0;
const deafGrandma = function () {
  let prompt =  require('prompt');
  prompt.start();
    prompt.get(['input'], function (err, result) {
      const input = result.input;
      if (input === '') {
        console.log("WHAT?");
        deafGrandma();
      } else if (input === "GOODBYE!" && inputCount === 0) {
        console.log("LEAVING SOON?");
        inputCount ++;
        deafGrandma();
      } else if (inputCount > 0) {
        console.log("LATER, SKATER!");
      } else if (input === input.toUpperCase()) {
        console.log("NO, NOT SINCE 1946!");
        deafGrandma();
      } else {
        console.log("SPEAK UP, KID!");
        deafGrandma();
      }
    });
    // Log the results.
      //
  

} 
deafGrandma();  
  