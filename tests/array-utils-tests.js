const test = require("../lib/testing-utilities.js");
const array = require("../lib/array-utils.js");

const assert = test.assertTest;
const assertArray = test.assertTestOnArray;
const getReport = test.generateAssertionReport;

const assertSorting = function() {
  assertArray("maxSort", array.maxSort([1, 2, 3]), [3, 2, 1], "sould be in assending order"); 
  assertArray("maxSort", array.maxSort([2, 1, 3]), [3, 2, 1], "sould be in assending order"); 
  assertArray("maxSort", array.maxSort([]), [], "sould be empty");
}

const assertBubbleSort = function() {
  assertArray("bubbleSort", array.bubbleSort([1, 2, 3]), [3, 2, 1], "sould be in assending order"); 
  assertArray("bubbleSort", array.bubbleSort([2, 1, 3]), [3, 2, 1], "sould be in assending order"); 
  assertArray("bubbleSort", array.bubbleSort([]), [], "sould be empty");
}

const assertMax = function() {
  assert("max", array.max([1, 2, 3]), 3, "last element should be max"); 
  assert("max", array.max([2, 4, 3]),  4, "middle element should be largest"); 
  assert("max", array.max([2]),  2, "only element should be max"); 
}

assertSorting();
assertMax();
assertBubbleSort();

console.log(getReport());
