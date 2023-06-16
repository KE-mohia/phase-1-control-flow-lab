function scuberGreetingForFeet(feet){
  // write youre code here!
  if(feet <=400){ 
    return 'This one is on me!'
  }
  else if (feet>2000 && feet<=2500) {
    return  'I will gladly take your thirty bucks.'
  }
  else if (feet >2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  //write youre code here!

let travel = city === "NYC" ? "Ok, sounds good." : "No go."
return travel;

}

function switchOnCharmFromTip(){
  // write youre code here!

  let travel =city =="NYC" ? "OK, sound good." :"No go."
  return travel;
}
function switchOnCharmFromTip(tip) {
  //write youre code here!
  switch (tip) {
case "generous":
  return "Thank you so much."

  case "not as generous":
  return "Thank you."

  default:
    return "Bye."


  }
}
