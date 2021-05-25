function deafGrandma() {
  secondResponse = ''
  response = prompt("HEY KID!",  )
  regexLowerCase = new RegExp(/[a-z]/);
  regexUpperCase = new RegExp(/[A-Z]/);
  
  if (response == "") {
    console.log('WHAT?')
  } else if (regexLowerCase.test(response) == true) {
    console.log('SPEAK UP, KID')
  } else if (response == "GOODBYE!") {
   secondResponse = prompt('LEAVING SO SOON?', )
    } else if (secondResponse == "GOODBYE!") {
      console.log("LATER SKATER!")
    }
  else if (regexUpperCase.test(response) == true) {
    console.log('NO, NOT SINCE 1946!')
  } 
  
  }
  
  deafGrandma()

  //Copied from my repl.it, couldnt figure out the issues surrounding prompt in this IDE.