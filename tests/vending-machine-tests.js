const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(0), 0, 
  "amount 0 shoud give 0 coins");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(1), 1, 
  "amount 1 shoud give 1 coin");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(3), 2, 
  "amount 3 shoud give 2 coin");
assert("determineNoOfCoinsToDispense", 
  vendingMachine.determineNoOfCoinsToDispense(5), 3, 
  "amount 5 shoud give 3 coins");

console.log(getReport());
