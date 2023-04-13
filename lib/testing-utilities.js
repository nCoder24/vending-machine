const style = require("./styling-utils.js");
const array = require("./array-utils.js"); 
const object = require("./object-utils.js"); 

// Assertion Log
const assertionLog = [];

const pushAssertion = function(fnName, actual, expected, message, isAssertionPassed) {
  assertionLog.push({fnName, actual, expected, message, isAssertionPassed});
}

const generateTestReport = function(isAssertionPassed, actual, expected, message) {
  const reportLines = [];

  reportLines.push((isAssertionPassed ? style.green("󰗡 ") : style.red(" ")) + message); 
  if (!isAssertionPassed) {
    reportLines.push(style.green("   expected: " + expected));
    reportLines.push(style.red("    actutal: " + actual));
  }

  return reportLines.join("\n");
}

const generateSummaryLine = function(assertions) {
  const totalCount = assertions.length;
  const passedCount = (object.group(assertions, "isAssertionPassed").true || []).length;

  return passedCount + " / " + totalCount + " passed";
}

const generateReports = function(assertions) {
  const reports = [];

  for (const assertion of assertions) {
    reports.push(generateTestReport(
      assertion.isAssertionPassed, 
      assertion.actual, 
      assertion.expected, 
      assertion.message
    ));
  }

  return reports.join("\n");
}

const generateGroupeTitle = function(assertions, message) {
  return style.headline(
    message + " " + "[ " + generateSummaryLine(assertions) + "]");
}

const generateGroupedReport = function(groupHeadline, assertions) {
  return groupHeadline + generateReports(assertions)
}

const generateGroupedByFnNameReport = function() {
  let allReports = [];
  const assertions = object.group(assertionLog, "fnName");

  for (const fnName in assertions) {
    const groupTitle = generateGroupeTitle(assertions[fnName], "Asserting " + fnName);
    allReports.push(generateGroupedReport(groupTitle, assertions[fnName]));
  }

  return allReports.join("\n");
}

const generateAssertionReport = function() {
  const summary = style.bold("\nSummary : " + generateSummaryLine(assertionLog));

  return generateGroupedByFnNameReport() + "\n" + summary;
}

const assertTestOnArray = function(fnName, actualArray, expectedArray, message) {
  const isAssertionPassed = array.areEqual(actualArray, expectedArray);

  pushAssertion(fnName, actualArray, expectedArray, message, isAssertionPassed); 
}

const assertTestOnOjbect = function(fnName, actualOjbect, expectedOjbect, message) {
  const isAssertionPassed = object.areEqual(actualOjbect, expectedOjbect);

  pushAssertion(fnName, actualOjbect, expectedOjbect, message, isAssertionPassed); 
}

const assertTest = function(fnName, actual, expected, message) {
  const isAssertionPassed = actual === expected;

  pushAssertion(fnName, actual, expected, message, isAssertionPassed);
}

exports.assertTest = assertTest;
exports.assertTestOnArray = assertTestOnArray;
exports.assertTestOnObject = assertTestOnOjbect;
exports.generateAssertionReport = generateAssertionReport;
