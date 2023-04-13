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

const areEqual = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (key in object1) {
    if (object1[key] !== object2[key]) return false;
  }

  return true;
}

exports.select = select;
exports.group = group;
exports.areEqual = areEqual;
