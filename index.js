function scuberGreetingForFeet(ride) {
  let response;
  
  if (ride <= 400) {
    response = 'This one is on me!';
  } else if (ride > 2000 && ride <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    response = 'No can do.';
  }
  
  return response;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
function switchOnCharmFromTip(tips) {
  switch(tips){
   case "generous":
   return "Thank you so much.";
   case "not as generous":
   return "Thank you.";
   default: 
   return "Bye.";
}
}