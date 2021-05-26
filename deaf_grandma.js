function deafGrandma() {
  var prompt = require('prompt');
  prompt.start();
  

  prompt.get(['response'], function (err, result) {
    if(result.response == 'GOODBYE!'){
      if(count == 1){
        console.log('LATER, SKATER');
        return
      }
      console.log('LEAVING SO SOON!');
      count += 1;
      deafGrandma()
      }
    else if (result.response === ''){
        console.log('WHAT!?')
        deafGrandma()
      }

    else if (result.response === result.response.toLowerCase()){
        console.log('SPEAK UP KID!')
        deafGrandma()
      }

    else if (result.response === result.response.toUpperCase()){
        console.log('NO, NOT SINCE 1946!')
        deafGrandma()

      }
    else{
        console.log('Invalid Input')

      }
    })
  }
  
var count = 0;
console.log('HEY KID!')
deafGrandma();
