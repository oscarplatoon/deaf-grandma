function deafGrandma() {
  
  const input = require('readline-sync');
 
 let goodbyeCount = 0

console.log("HEY KID!")

while (goodbyeCount !== 2) {

  let response = input.question("")

  if (response === ""){
    console.log("WHAT?!")
  }else if (/[a-z]/.test(response)){
    console.log("SPEAK UP, KID!")
  }else if (response === "GOODBYE!" && goodbyeCount === 0){
    goodbyeCount++
    console.log("LEAVING SO SOON?")
  }else if (response === "GOODBYE!" && goodbyeCount === 1){
    goodbyeCount++
    console.log("LATER, SKATER!")
    }else if (/^[A-Z]*$/.test(response)){
    console.log("NO, NOT SINCE 1946!")
  }
}

}

deafGrandma();
