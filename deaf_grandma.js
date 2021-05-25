function deafGrandma(str) {
  let lowerCaseLet = [/a-z/];
  let upperCaseLet = [/A-Z/];
  let talk = prompt("Talk to Grandma!");
  if(str.length === 0){
    console.log("WHAT?!");
  } 
  else if (str.includes(lowerCaseLet) === true){
    console.log("SPEAK UP, KID!");
  }
  else if (str.includes(upperCaseLet) === true){
    console.log("NO, NOT SINCE 1946!");
  }
  else if (str === "GOODBYE!"){
    console.log("LEAVING SO SOON?")
  } 
  else {
    console.log("LATER, SKATER!")
  }
}

deafGrandma('');
