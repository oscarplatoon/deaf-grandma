function deafGrandma(string) {
  
  // Create a variable to keep track of how many GOODBYE! have been said.
  let goodByeCounter = 0;
 

  // Use if statements to go through the string and return the proper response.
  if (string == null) {
      console.log("WHAT?!");
  } else {
    if (string == string.toLowerCase()) {
      console.log("SPEAK UP, KID!"); 
    } 
    if (string == "GOODBYE!") {
      goodByeCounter++;
      console.log("LEAVING SO SOON?")
      console.log(goodByeCounter);
    } if (string == "GOODBYE!" && goodByeCounter > 0) {
      console.log("LATER, SKATER!");
    } else {
    if (string == string.toUpperCase()) {
      console.log("NO, NOT SINCE 1946!")
      }
    } 
  }
}

deafGrandma("GOODBYE!");
