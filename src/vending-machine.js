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

const max = function(numbers) {
  let maxNo = numbers[0];

  for (number of numbers.slice(1)) {
    maxNo = Math.max(maxNo, number);
  }

  return maxNo;
}

const maxSort = function(numbers) {
  const remainingNumbers = numbers.concat();
  let sortedNumbers = [];

  while (remainingNumbers.length !== 0) {
    sortedNumbers = sortedNumbers.concat(remainingNumbers.splice(remainingNumbers.indexOf(max(remainingNumbers)), 1));
  }

  return sortedNumbers;
}

const determineNoOfCoinsToDispense = function(amount, denominations) {
  const coinsToDispense = {};
  let remaining = amount;
  const orderedDenominations = maxSort(denominations);

  for (denomination of orderedDenominations) {
    coinsToDispense[denomination] = determineNoOfCoinsToDispenseOf(remaining, denomination);
    remaining = removeMaxDenominations(remaining, denomination);
  }

  return addCoins(coinsToDispense);
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;
exports.maxSort = maxSort;
exports.max = max;

/*
TODO:
  - loop [done]
  - seperate function for remaining [done]
  - use object to manage [done]
 */
