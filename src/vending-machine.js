const determineNoOfCoinsToDispenseOf = function(amount, denomination) {
  return {coins : Math.floor(amount / denomination), 
    extra : amount % denomination};
}

const determineNoOfCoinsToDispense = function(amount) {
  const fiveRupeeCoins =  determineNoOfCoinsToDispenseOf(amount, 5).coins;
  let remaining = determineNoOfCoinsToDispenseOf(amount, 5).extra;
  const twoRupeeCoins = determineNoOfCoinsToDispenseOf(remaining, 2).coins;
  remaining = determineNoOfCoinsToDispenseOf(remaining, 2).extra;
  const oneRupeeCoins = determineNoOfCoinsToDispenseOf(remaining, 1).coins;

  return fiveRupeeCoins + twoRupeeCoins + oneRupeeCoins;
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;
