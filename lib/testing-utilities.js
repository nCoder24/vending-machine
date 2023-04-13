const style = require("./styling-utils.js");
const array = require("./array-utils.js"); 
const object = require("./object-utils.js"); 

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

  return array.join(reportLines, "\n");
}

const generateSummaryLine = function(assertions) {
  const totalCoutnt = assertions.length;
  const passedCount = object.group(assertions, "isPassedAssertion").true.length;

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

  return array.join(reports, "\n");
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
  const assertions = object.group(assertionLog, "fnName");

  for (const fnName in assertions) {
    const groupTitle = generateGroupeTitle(assertions[fnName], "Asserting " + fnName);
    allReports.push(generateGroupedReport(groupTitle, assertions[fnName]));
  }

  return array.join(allReports, "\n");
}

const generateAssertionReport = function() {
  const summary = style.bold("\nSummary : " + generateSummaryLine(assertionLog));

  return generateGroupedByFnNameReport() + "\n" + summary;
}

const assertTestOnArray = function(fnName, actualArray, expectedArray, message) {
  const isPassedAssertion = array.areEqual(actualArray, expectedArray);

  pushAssertion(fnName, actualArray, expectedArray, message, isPassedAssertion); 
}

const assertTest = function(fnName, actual, expected, message) {
  const isPassedAssertion = actual === expected;

  pushAssertion(fnName, actual, expected, message, isPassedAssertion);
}

exports.assertTest = assertTest;
exports.assertTestOnArray = assertTestOnArray;
exports.generateAssertionReport = generateAssertionReport;
