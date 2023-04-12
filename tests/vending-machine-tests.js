const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

const assertVendingMachine = function() {
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(0, [1]), 0, 
    "amount 0 shoud give 0 coins");
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(1, [1, 2]), 1, 
    "amount 1 shoud give 1 coin (1:1)");
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(3, [1, 2]), 2, 
    "amount 3 shoud give 2 coin (2:1, 1:1)");
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(5, [1, 2, 5]), 1, 
    "amount 5 shoud give 1 coins (5:1)");
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(12, [1, 2, 5, 10]), 2, 
    "amount 12 shoud give 2 coins (10:1, 2:1)");
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(15, [1, 2, 5, 10]), 2, 
    "amount 15 shoud give 2 coins (10:1, 5:1)");
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(13, [4, 1, 7]), 4, 
    "amount 13 shoud give 4 coins (7:1, 4:1, 1:2)");
  assert("determineNoOfCoinsToDispense", 
    vendingMachine.determineNoOfCoinsToDispense(13, [7, 4, 1]), 4, 
    "amount 13 shoud give 4 coins (7:1, 4:1, 1:2)");
}

const assertSorting = function() {
  assertArray("maxSort", vendingMachine.maxSort([1, 2, 3]), [3, 2, 1], "sould be in assending order"); 
  assertArray("maxSort", vendingMachine.maxSort([2, 1, 3]), [3, 2, 1], "sould be in assending order"); 
  assertArray("maxSort", vendingMachine.maxSort([]), [], "sould be empty");
}

const assertMax = function() {
  assert("max", vendingMachine.max([1, 2, 3]), 3, "sould be in assending order"); 
  assert("max", vendingMachine.max([2, 1, 3]),  3, "sould be in assending order"); 
  assert("max", vendingMachine.max([2]),  2, "sould be in assending order"); 
}

assertSorting();
assertMax();

console.log(getReport());
