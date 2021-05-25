function deafGrandma() {
  let input = require('prompt-sync')();
  let count = 0;
  while (count < 2 ) {
    const retort = input('HELLO??!   ');
   if (retort == '') {
      console.log('WHAT?!');
  } else if (/[a-z]/.test(retort)) {
      console.log('SPEAK UP KID!!');
  } else if (retort === 'GOODBYE!') {
      if (count == 0) {
        console.log('LEAVING SO SOON?');
        count ++;
      }
    else if (count == 1) {
      console.log('LATER SKATER!');
      count ++;
    }
  } else {
    console.log('NOT SINCE 1946')
  }
}}
deafGrandma();
