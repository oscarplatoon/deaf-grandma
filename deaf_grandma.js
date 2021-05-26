var prompt = require('prompt');
prompt.start();

function deafGrandma() {
  prompt.get(['input'], function (err,result){ 
  const input =  result.input;
//  let i = 0;
//  while ( i <=2 ){
    if (input==='') {
      console.log("WHAT?!")
    }
    
         
        //let input = window.prompt('Talk to grandma');

    // else if (input /= input.toUpperCase(input)) {
    //   console.log('SPEAK UP, KID!');
    // }else if (input== input.toUpperCase(input)) {
    //   console.log('NO, NOT SINCE 1946!');
    // }else if(input=='GOODBYE!') {
    //   console.log('LEAVING SO SOON?');
    //   i++;
    // }else if (input=='GOODBYE!' && i==1) {
    //   console.log('LATER, SKATER!');
    //}
    }
  );
}
deafGrandma();