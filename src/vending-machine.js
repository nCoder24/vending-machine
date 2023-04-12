const determineNoOfCoinsToDispenseOf = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const removeMaxDenominations = function(amount, denomination) {
  return amount - (denomination * determineNoOfCoinsToDispenseOf(amount, denomination));
}

const determineNoOfCoinsToDispense = function(amount, denominations) {
  let totalNoOfCoins = 0;
  let remaining = amount;
  reversedDenominations = denominations.concat().reverse();

  for (denomination of reversedDenominations) {
    totalNoOfCoins += determineNoOfCoinsToDispenseOf(remaining, denomination);
    remaining = removeMaxDenominations(remaining, denomination);
  }
  
  return totalNoOfCoins;
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;

/*
TODO:
  - loop
  - seperate function for remaining
  - use object to manage
*/
