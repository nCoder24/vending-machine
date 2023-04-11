const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

assert("demoFn", 1, 1, "dummy passing test");
assert("demoFn", 1, 2, "dummy failing test");

assert("vendingMachine", vendingMachine.test(), 0, "should pass if vending machine is linke");

console.log(getReport());
