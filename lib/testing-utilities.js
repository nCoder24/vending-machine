const style = require("./styling-utils.js");

// Assertion Log
const assertionLog = [];

const pushAssertion = function(fnName, actual, expected, message, isPassedAssertion) {
  assertionLog.push({fnName, actual, expected, message, isPassedAssertion});
}

const generateTestReport = function(isPassedAssertion, actual, expected, message) {
  const reportLines = [];

  reportLines.push((isPassedAssertion ? style.green("󰗡 ") : style.red(" ")) + message); 
  if (!isPassedAssertion) {
    reportLines.push(style.green("   expected: " + expected));
    reportLines.push(style.red("    actutal: " + actual));
  }

  return join(reportLines, "\n");
}

const select = function(object, keys) {
  const newObject = {};

  for (const key of keys) {
    newObject[key] = object[key];
  }

  return newObject;
}

const group = function(listOfObjects, key) {
  const groupedObject = {};

  for (const object of listOfObjects) {
    const groupKey = object[key];
    groupedObject[groupKey] = (groupedObject[groupKey] || []).concat(object);
  }

  return groupedObject;
}

const generateSummaryLine = function(assertions) {
  const totalCoutnt = assertions.length;
  const passedCount = group(assertions, "isPassedAssertion").true.length;

  return passedCount + " / " + totalCoutnt + " passed";
}

const generateReports = function(listOfReports) {
  const reports = [];

  for (const test of listOfReports) {
    reports.push(generateTestReport(
      test.isPassedAssertion, 
      test.actual, 
      test.expected, 
      test.message
    ));
  }

  return join(reports, "\n");
}

const generateGroupeTitle = function(listOfReports, message) {
  return style.headline(
    message + " " + "[ " + generateSummaryLine(listOfReports) + "]");
}

const generateGroupedReport = function(groupHeadline, listOfReports) {
  return groupHeadline + generateReports(listOfReports)
}

const generateGroupedByFnNameReport = function() {
  let allReports = [];
  const assertions = group(assertionLog, "fnName");

  for (const fnName in assertions) {
    const groupTitle = generateGroupeTitle(assertions[fnName], "Asserting " + fnName);
    allReports.push(generateGroupedReport(groupTitle, assertions[fnName]));
  }

  return join(allReports, "\n");
}

const generateAssertionReport = function() {
  const summary = style.bold("\nSummary : " + generateSummaryLine(assertionLog));

  return generateGroupedByFnNameReport() + "\n" + summary;
}

// Common FnNames
const join = function(array, delimeter) {
  if (array.length === 0) return "";

  let joinedElements = array[0];
  for (element of array.slice(1)) {
    joinedElements += delimeter + element;
  }

  return joinedElements;
}

// Array Testing FnNames
const areEqual = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  let index = 0;
  while (index < array1.length) {
    if (array1[index] !== array2[index]) return false;
    index++;
  }

  return true;
}

const assertTestOnArray = function(fnName, actualArray, expectedArray, message) {
  const isPassedAssertion = areEqual(actualArray, expectedArray);

  pushAssertion(fnName, actualArray, expectedArray, message, isPassedAssertion); 
}

// Other Type Testing FnNames
const assertTest = function(fnName, actual, expected, message) {
  const isPassedAssertion = actual === expected;

  pushAssertion(fnName, actual, expected, message, isPassedAssertion);
}

exports.assertTest = assertTest;
exports.assertTestOnArray = assertTestOnArray;
exports.generateAssertionReport = generateAssertionReport;
