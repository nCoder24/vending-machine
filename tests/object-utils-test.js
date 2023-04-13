const test = require("../lib/testing-utilities.js");
const object = require("../lib/object-utils.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

const assertAreEqual = function() {
  assert("areObjectEqual", object.areEqual({1:1, 2:2}, {1:1, 2:2}), true, "two equal objects should be equal"); 
  assert("areObjectEqual", object.areEqual({1:1, 2:2}, {2:2}), false, "two objects of unequal length should be unequal"); 
  assert("areObjectEqual", object.areEqual({1:1, 2:2}, {1:2, 2:2}),  false, "two unequal values of same key should be unequal"); 
}

assertAreEqual();

console.log(getReport());
