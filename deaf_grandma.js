//Use npm to bring in prompt
var prompt = require('prompt');

function deafGrandma(counter = 0) {

  //base output helps to ID if something has gone wrong
  var output = 'Grandmother awaits...'
  prompt.start();
  prompt.get(['askGma'], function (err, result) {
    var input = result.askGma;

    //empty input case
    if (input === '') {
      output = 'WHAT?!';
    } 

    //lowercase containing input case
    else if(/[a-z]/.test(input)) {
      output = 'SPEAK UP, KID!';
    } 
    
    //GOODBYE case
    else if (input == 'GOODBYE!') {
      //increment the counter which is tested before restarting with new incremented counter
      counter++
      //first Goodbye case
      if (counter == 1) {
        output = 'LEAVING SO SOON?';
      } 
      
      //second Goodbye case with return
      else if(counter === 2) {
        output = 'LATER, SKATER!';
        console.log(output);
        return;
      }
    } 
    
    //all caps input case
    else if (input === input.toUpperCase()) {
      output = "NO, NOT SINCE 1946!";
    }

    //console.log the assigned output, and restart deafGrandma with new counter value.
    console.log(output)
    if(counter < 2) {
      deafGrandma(counter)
    }
  });
}

deafGrandma();
