
// Write a program which can imitate a Grandma who's hard of hearing and follows
// these constraints:

// * If you don't input anything (just hit enter) she responds with `WHAT?!`
// * If you ask a question with any lower-case letters, she responds with
// `SPEAK UP, KID!`
// * If you talk to her in all upper-case letters, she responds with
// `NO, NOT SINCE 1946!`

// * The first time you say `GOODBYE!` she says `LEAVING SO SOON?`
// * The second time you say `GOODBYE!` she says `LATER, SKATER!` and the program
// exits.

// ## Example

// ```
// HEY KID!
// > hi, grandma
// SPEAK UP, KID!
// > I SAID HI, GRANDMA
// NO, NOT SINCE 1946!
// >
// WHAT?!
// > Goodbye!
// SPEAK UP, KID!
// > GOODBYE!
// LEAVING SO SOON?
// > GOODBYE!
// LATER, SKATER!
// ```





function deafGrandma() {
  let yourAnswer = prompt("Say something to Grandma?");
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  let granmaSay = "";
  
  if(!yourAnswer) granmaSay = "WHAT?!";
  for (let i = 0; i < yourAnswer.length; i++) {
    if (upperCase.indexOf(yourAnswer[i]) !== -1 && yourAnswer !== "GOODBYE!")  {
      granmaSay = "NO, NOT SINCE 1946!";
    } else if (lowerCase.indexOf(yourAnswer[i]) !== -1) {
      granmaSay = "SPEAK UP, KID!";
    }
    
  }
  if (count === 0 && yourAnswer === "GOODBYE!") {
    granmaSay = "LEAVING SOON?!";
    count ++;
  }
  if (count === 1 && yourAnswer === "GOODBYE!") {
    granmaSay = "LATER, SKATER!";
    count = 0;
  }
    console.log(granmaSay);
  }
 
   
   
 
 deafGrandma()