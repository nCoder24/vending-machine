const determineNoOfCoinsToDispense = function(amount) {
  return Math.floor(amount / 2) + (amount % 2)
}

exports.determineNoOfCoinsToDispense = determineNoOfCoinsToDispense;
