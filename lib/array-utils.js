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
      if (sortedNumbers[index] < sortedNumbers[index+1]) {
        const elementInIndex = sortedNumbers[index];
        sortedNumbers[index] = sortedNumbers[index+1];
        sortedNumbers[index+1] = elementInIndex;
      }
    }
  }

  return sortedNumbers;
}

const join = function(list, delimeter) {
  if (list.length === 0) return "";

  let joinedElements = list[0];
  for (element of list.slice(1)) {
    joinedElements += delimeter + element;
  }

  return joinedElements;
}

const areEqual = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  let index = 0;
  while (index < array1.length) {
    if (array1[index] !== array2[index]) return false;
    index++;
  }

  return true;
}

exports.max = max;
exports.maxSort = maxSort;
exports.bubbleSort = bubbleSort;
exports.join = join;
exports.areEqual = areEqual;
