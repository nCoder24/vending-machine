const determineFiveRupeeCoinsToDispense = function(amount) {
  return Math.floor(amount / 5);
}

const determineNoOfCoinsToDispense = function(amount) {
  const fiveRupeeCoins =  determineFiveRupeeCoinsToDispense(amount)
  let remaining = amount % 5;
  const twoRupeeCoins = Math.floor(remaining / 2);
  remaining = remaining % 2;
  const oneRupeeCoins = remaining;

  return fiveRupeeCoins + twoRupeeCoins + oneRupeeCoins;
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;
