const determineNoOfCoinsToDispenseOf = function(amount, denomination) {
  return {coins : Math.floor(amount / denomination), 
    extra : amount % denomination};
}

const determineNoOfCoinsToDispense = function(amount, denominations) {
  let totalNoOfCoins = 0;
  let remaining = amount;
  reversedDenominations = denominations.concat().reverse();

  for (denomination of reversedDenominations) {
    totalNoOfCoins += determineNoOfCoinsToDispenseOf(remaining, denomination).coins;
    remaining = determineNoOfCoinsToDispenseOf(remaining, denomination).extra;
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
