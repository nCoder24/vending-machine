const determineNoOfCoinsToDispenseOf = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const removeMaxDenominations = function(amount, denomination) {
  return amount - (denomination * determineNoOfCoinsToDispenseOf(amount, denomination));
}

const addCoins = function(coins) {
  let total = 0;

  for (denomination in coins) {
    total += coins[denomination];
  }

  return total;
}

const determineNoOfCoinsToDispense = function(amount, denominations) {
  const coinsToDispense = {};
  let remaining = amount;
  const orderedDenominations = denominations.concat().reverse();

  for (denomination of orderedDenominations) {
    coinsToDispense[denomination] = determineNoOfCoinsToDispenseOf(remaining, denomination);
    remaining = removeMaxDenominations(remaining, denomination);
  }

  return addCoins(coinsToDispense);
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;

/*
TODO:
  - loop [done]
  - seperate function for remaining [done]
  - use object to manage [done]
 */
