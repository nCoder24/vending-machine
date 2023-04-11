const determineNoOfCoinsToDispenseOf = function(amount, denomination) {
  return {coins : Math.floor(amount / denomination), 
    extra : amount % denomination};
}

const determineNoOfCoinsToDispense = function(amount) {
  const tenRupeeCoins = determineNoOfCoinsToDispenseOf(amount, 10).coins;
  let remaining = determineNoOfCoinsToDispenseOf(amount, 10).extra;
  const fiveRupeeCoins = determineNoOfCoinsToDispenseOf(remaining, 5).coins;
  remaining = determineNoOfCoinsToDispenseOf(remaining, 5).extra;
  const twoRupeeCoins = determineNoOfCoinsToDispenseOf(remaining, 2).coins;
  remaining = determineNoOfCoinsToDispenseOf(remaining, 2).extra;
  const oneRupeeCoins = determineNoOfCoinsToDispenseOf(remaining, 1).coins;

  return tenRupeeCoins + fiveRupeeCoins + twoRupeeCoins + oneRupeeCoins;
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;
