const max = function(numbers) {
  let maxNo = numbers[0];

  for (number of numbers.slice(1)) {
    maxNo = Math.max(maxNo, number);
  }

  return maxNo;
}

const maxSort = function(numbers) {
  const remainingNumbers = numbers.concat();
  let sortedNumbers = [];

  while (remainingNumbers.length !== 0) {
    sortedNumbers = sortedNumbers.concat(remainingNumbers.splice(remainingNumbers.indexOf(max(remainingNumbers)), 1));
  }

  return sortedNumbers;
}

exports.max = max;
exports.maxSort = maxSort;
