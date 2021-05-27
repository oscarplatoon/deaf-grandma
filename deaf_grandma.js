var prompt = require('prompt');
  //
  // Start the prompt
  //
  prompt.start();
//lesson 1
let goodByeCount = 0;
function deafGrandma() {
    prompt.get(['input'], function (err, result) {
        const input = result.input;
        //If you don't input anything (just hit enter) she responds with `WHAT?!`
        if (input ===''){
            console.log('What?!');
        } 
        
         else if (input ==="GOODBYE!" && goodByeCount===1){
            return console.log("Later skater!");
         }
        else if (input ==="GOODBYE!"){
            console.log("Leaving so soon?");
            goodByeCount++;
          
        }
        //If you talk to her in all upper-case letters, she responds with `NO, NOT SINCE 1946!`
        else if (input === input.toUpperCase()){
            console.log('No, Not since 1946!');
        }
        
        else {
            console.log("Speak up, KID!");
        }
            deafGrandma();
    });
}


deafGrandma();
  //
  // Get two properties from the user: username and email
  //
  
    //
    // Log the results.
    //
