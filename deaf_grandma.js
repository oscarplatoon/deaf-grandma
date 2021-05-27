  let goodByeCount = 0;
  var prompt = require('prompt');
  prompt.start();

  function deafGrandma() {
    prompt.get(['input'], function (err, result){
      const input = result.input;
    if(input === '') {
        console.log("WHAT?!")
        deafGrandma()
      } 
    else if (input === input.toUpperCase()){
      console.log("NO, NOT SINCE 1946!");
      deafGrandma();
    }
    else if (input === "GOODBYE!" && goodByeCount === 1){
      console.log("LATER, SKATER!")
    }
    else if (input === "GOODBYE!"){
      console.log("LEAVING SO SOON?");
      goodByeCount++
    }
    else {
      console.log("SPEAK UP, KID!")
    }
    })
  }
  

deafGrandma();
