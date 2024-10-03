function scuberGreetingForFeet(someValue) {
if (someValue <= 400) {
  return 'This one is on me!'; // Free ride for distances less than or equal to 400 feet
} else if (someValue > 400 && someValue <= 2000) {
  return 'That will be twenty bucks.'; // Charge for distances between 400 and 2000 feet
} else if (someValue > 2000 && someValue <= 2500) {
  return 'I will gladly take your thirty bucks.'; // Flat fare for distances between 2000 and 2500 feet
} else {
  return 'No can do.'; // No rides over 2500 feet
}
}

// Function to return a response based on the city
function ternaryCheckCity(city) {
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; // Ternary operator to check if the city is NYC
}

// Function to return a response based on the tip amount
function switchOnCharmFromTip(tip) {
switch (tip) {
  case 'generous':
    return 'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';
  case 'cheap':
    return 'Bye.';
  default:
    return 'Bye.'; // Default case for any other tip
}
}