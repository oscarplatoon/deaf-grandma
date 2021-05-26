var prompt = require('prompt');
 

console.log('HEY KID');
function deafGrandma(count = 0) {

  prompt.start();

//let count = 0;
///console.log('Respond to your deaf Grandma');

    prompt.get( 'response', function (err, result) {
      if (count < 2) {
      let input = result.response;
      if (input === ''){
        console.log(`WHAT?!`);
      } else if (input == `GOODBYE!`){
        count++;
        if (count == 1){
          console.log(`LEAVING SO SOON?`);
        } else if (count == 2) {
          console.log(`LATER, SKATER!`);
        }   
      } else if (input !== input.toUpperCase()){
        console.log(`SPEAK UP, KID!`);
      } else if (input == input.toUpperCase()){
        console.log(`NO, NOT SINCE 1946!`);
      } 
        if (count < 2){
          deafGrandma(count);
        }

    }
  });
}

deafGrandma();
