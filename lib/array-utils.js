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

const bubbleSort = function(numbers) {
  const sortedNumbers = numbers.concat();
  for (let count = 0; count < sortedNumbers.length; count++) {
    for (let index = 0; index < sortedNumbers.length-1; index++) {
      if (sortedNumbers[index] > sortedNumbers[index+1]) {
        const elementInIndex = sortedNumbers[index];
        sortedNumbers[index] = sortedNumbers[index+1];
        sortedNumbers[index+1] = elementInIndex;
      }
    }
  }

  return sortedNumbers;
}

exports.max = max;
exports.maxSort = maxSort;
exports.bubbleSort = maxSort;
