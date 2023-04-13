const array = require("../lib/array-utils.js");

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
  return addCoins(determineCoinsToDispense(amount, denominations));
}

const determineCoinsToDispense = function(amount, denominations) {
  const coinsToDispense = {};
  let remaining = amount;
  const orderedDenominations = array.maxSort(denominations);

  for (denomination of orderedDenominations) {
    coinsToDispense[denomination] = determineNoOfCoinsToDispenseOf(remaining, denomination);
    remaining = removeMaxDenominations(remaining, denomination);
  }

  return coinsToDispense;
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;
exports.determineCoinsToDispense = determineCoinsToDispense;
