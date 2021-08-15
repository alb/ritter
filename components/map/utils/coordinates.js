export function convertCoords(coordinates) {
  return reverse(copy(coordinates));
}

function reverse(array) {
  array = array.reverse();

  array.map((item) => {
    if (Array.isArray(item)) {
      return reverse(item);
    }
  });
  return array;
}

function copy(array) {
  let newArray = [];

  array.forEach((value) => {
    if (Array.isArray(value)) {
      newArray.push(copy(value));
    } else {
      newArray.push(value);
    }
  });
  return newArray;
}
