// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  const firstTwo = Number(cardNumber[0] + cardNumber[1]);
  const firstThree = Number(cardNumber.substring(0,3));
  const firstFour = Number(cardNumber.substring(0,4));
  const firstSix = Number(cardNumber.substring(0,6));

  let network = '';
  if ((firstTwo === 38 || firstTwo === 39) && cardNumber.length === 14) {
  	network = 'Diner\'s Club';
  } else if ((firstTwo === 34 || firstTwo === 37) && cardNumber.length === 15) {
  	network = 'American Express';
  } else if ((cardNumber[0] === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
  	if ((firstFour === 4903 || firstFour === 4905 || firstFour === 4911 || firstFour === 4936) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
  		network = 'Switch';
  	} else {
  		network = 'Visa';
  	}
  } else if ((firstTwo >= 51 && firstTwo <= 55) && cardNumber.length === 16) {
  	network = 'MasterCard';
  } else if ((firstFour === 6011 || (firstThree >=644 && firstThree <= 649) || firstTwo === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
  	network = 'Discover';
  } else if ((firstFour === 5018 || firstFour === 5020 || firstFour === 5038 || firstFour === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
  	network = 'Maestro';
  } else if ((cardNumber.length >= 16 && cardNumber.length <= 19) && ((firstSix >= 622126 && firstSix <= 622925) || (firstThree >= 624 && firstThree <= 626) || (firstFour >= 6282 && firstFour <= 6288))) {
  	network = 'China UnionPay';
  } else if ((firstSix === 564182 || firstSix === 633110 || firstFour === 6333 || firstFour === 6759) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
  	network = 'Switch';
  }	else {
  	network = "N/A";
  }
  return network;
};

  	 