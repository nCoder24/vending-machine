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

exports.select = select;
exports.group = group;
