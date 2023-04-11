const determineNoOfCoinsToDispenseOf = function(amount, denomination) {
  return {coins : Math.floor(amount / denomination), 
    extra : amount % denomination};
}

const denominations = [10, 5, 2, 1];

const determineNoOfCoinsToDispense = function(amount) {
  let totalNoOfCoins = 0;
  let remaining = amount;

  for (denomination of denominations) {
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
