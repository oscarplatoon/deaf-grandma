function deafGrandma(greeting) {
  var text;

let response = prompt("say something to your grandma");

  switch(response) {
  case "":
    text = "WHAT?!";
    break;
  case response.toLowerCase();
    text = "SPEAK UP, KID!";
    break;
  case response.toUpperCase():
    text = "NO, NOT SINCE 1946!";
    break;
    case "Goodbye":
    text = "LEAVING SO SOON?";
    break;
  default:
    text = "LATER, SKATER!";
    break;
}
}

deafGrandma()
