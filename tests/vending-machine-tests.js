const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

test.assertTest("demoFn", 1, 1, "dummy passing test");
test.assertTest("demoFn", 1, 2, "dummy failing test");

test.assertTest("vendingMachine", vendingMachine.test(), 0, "should pass if vending machine is linked");

console.log(test.generateAssertionReport());
