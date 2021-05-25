/* Write a program which can imitate a Grandma who's hard of hearing and follows these constraints:

If you don't input anything (just hit enter) she responds with WHAT?!

If you ask a question with any lower-case letters, she responds with SPEAK UP, KID!

If you talk to her in all upper-case letters, she responds with NO, NOT SINCE 1946!

The first time you say GOODBYE! she says LEAVING SO SOON?

The second time you say GOODBYE! she says LATER, SKATER! and the program exits. 
*/

function deafGrandma() {
  let goodByeCount = 0;
  const prompt = require('prompt-sync')();
  let regexp = /([a-z])/g;

  while (goodByeCount != 2) {
    const speech = prompt('HUH? ');

    if (speech == "") console.log("WHAT?!");

    // tests for at least one lower case letter
    else if (regexp.test(speech)) console.log("SPEAK UP, KID!");

    else if (speech == "GOODBYE!") {
      if (goodByeCount == 0) {
        goodByeCount++;
        console.log("LEAVING SO SOON?");
      }
      else if (goodByeCount == 1) {
        console.log("LATER, SKATER!");
        return;
      }
    }
// assumes the input is all caps since no lower case letters were found by regular expression
    else console.log("NO, NOT SINCE 1946!");
  }
};

deafGrandma();