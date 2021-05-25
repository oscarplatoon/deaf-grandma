function deafGrandma(input) {
  
  //if input is empty log WHAT?
  if (input === "") {
    console.log("WHAT?")
  //If input is lowercase log SPEAK UP, KID!
  } else if (input === input.toLowerCase()) {
    console.log("SPEAK UP, KID!")
  //if input is uppercase log NO, NOT SINCE 1946!
  } else if (input === input.toUpperCase()) {
    console.log("NO, NOT SINCE 1946!")
  //if input  is GOODBYE!, log LEAVING SO SOON?
  } else if (input === "GOODBYE!") {
    console.log("LEAVING SO SOON?")
  // If input is GOODBYE!, log LATER, SKATER!
  }
  if (input === "GOODBYE!") {
    console.log("LATER, SKATER!")
  }

}

deafGrandma(input);
