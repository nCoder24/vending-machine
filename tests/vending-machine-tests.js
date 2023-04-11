const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(0, [1, 2, 5, 10]), 0, 
  "amount 0 shoud give 0 coins");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(1, [1, 2, 5, 10]), 1, 
  "amount 1 shoud give 1 coin (1:1)");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(3, [1, 2, 5, 10]), 2, 
  "amount 3 shoud give 2 coin (2:1, 1:1)");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(5, [1, 2, 5, 10]), 1, 
  "amount 5 shoud give 1 coins (5:1)");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(12, [1, 2, 5, 10]), 2, 
  "amount 12 shoud give 2 coins (10:1, 2:1)");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(15, [1, 2, 5, 10]), 2, 
  "amount 5 shoud give 2 coins (10:1, 5:1)");

console.log(getReport());
