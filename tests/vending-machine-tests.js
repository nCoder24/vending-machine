const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = test.assertTest;
const assertObject = test.assertTestOnObject;
const getReport = test.generateAssertionReport;

const assertNumberOfCoins = function() {
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(0, [1]), 0, 
    "₹0 should give 0 coin"
  );
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(1, [1, 2]), 1, 
    "₹1 should give 1 coin (1:1)"
  );
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(3, [1, 2]), 2, 
    "₹3 should give 2 coins (2:1, 1:1)"
  );
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(5, [1, 2, 5]), 1, 
    "₹5 should give 1 coins (5:1)"
  );
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(12, [1, 2, 5, 10]), 2, 
    "₹12 should give 2 coins (10:1, 2:1)"
  );
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(15, [1, 2, 5, 10]), 2, 
    "₹15 should give 2 coins (10:1, 5:1)"
  );
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(13, [4, 1, 7]), 4, 
    "₹13 (unordered denominations) should give 4 coins (7:1, 4:1, 1:2)"
  );
  assert(
    "determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(13, [7, 4, 1]), 4, 
    "₹13 (reversed denominations) should give 4 coins (7:1, 4:1, 1:2)"
  );
}

const assertDetermineDenominationsToDispense = function() {
  assertObject(
    "determineCoinsToDispense", 
    vendingMachine.determineCoinsToDispense(15, [5]), {5:3}, 
    "₹15 should give 3 coins (5:3)"
  );
  assertObject(
    "determineCoinsToDispense", 
    vendingMachine.determineCoinsToDispense(13, [7, 4, 1]), {7:1, 4:1, 1:2}, 
    "₹13 should give 4 coins (7:1, 4:1, 1:2)"
  );
  assertObject(
    "determineCoinsToDispense", 
    vendingMachine.determineCoinsToDispense(13, [7, 4, 2]), {7:1, 4:1, 2:1}, 
    "₹13 should give 4 coins (7:1, 4:1, 2:1)"
  );
}

assertNumberOfCoins();
assertDetermineDenominationsToDispense();

console.log(getReport());
