const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

assert("oneRupeeCoinsToDispense", 
  vendingMachine.oneRupeeCoinsToDispense(0), 0, 
  "amount 0 shoud give 0 coins");
assert("oneRupeeCoinsToDispense", 
  vendingMachine.oneRupeeCoinsToDispense(1), 1, 
  "amount 1 shoud give 1 coin");
assert("oneRupeeCoinsToDispense", 
  vendingMachine.oneRupeeCoinsToDispense(45), 45, 
  "amount 45 shoud give 45 coins");

console.log(getReport());
