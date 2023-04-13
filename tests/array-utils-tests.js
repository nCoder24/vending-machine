const test = require("../lib/testing-utilities.js");
const vendingMachine = require("../lib/array-utils.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

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

//console.log(getReport());
