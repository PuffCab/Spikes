//Find duplicate students solutions
//  //////

let findDupl = (arr) => {
  let dups = [];
  let compare = [];
  for (let num of arr) {
    if (!compare.includes(num)) {
      compare.push(num);
    } else {
      dups.push(num);
    }
  }
  return dups;
};
var arr = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
console.log(findDupl(arr));

////////////////////////////
//  //////
var arr = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
const findDuplicate = (arr) => {
  let counts = {};
  for (i = 0; i <= arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else counts[arr[i]] = 1;
  }
  for (let el in counts) {
    if (counts[el] >= 2) {
      console.log(el);
    }
  }
};

findDuplicate(arr);
////////////////////////////
//  //////
var a1 = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
let doubleArrayFunction = function doubleArray(a1) {
  let arrayDouble = [];
  let doubleCheck = 0; // esto es double check para ver si el numero esta repetido, o algo asi.

  for (let i = 0; i < a1.length; i++) {
    for (let j = i + 1; j < a1.length; j++) {
      if (a1[i] === a1[j] && a1[i] !== doubleCheck) {
        arrayDouble.push(a1[j]);
        doubleCheck = a1[j];
      }
    }
  }

  return arrayDouble;
};
////////////////////////////
//  //////
var array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
var duplicateArray = [];
array.forEach((argument) => {
  if (duplicateArray.includes(argument)) {
    console.log(argument);
  } else {
    duplicateArray.push(argument);
  }
});
////////////////////////////
//  //////
var array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
function find_duplicate_in_array(arra1) {
  const object = {};
  const result = [];

  arra1.forEach(function (item) {
    if (!object[item]) object[item] = 0;
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }

  return result;
}
console.log(
  find_duplicate_in_array([
    3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12,
    99, 100,
  ])
);
////////////////////////////
// RAUL 1 //////
var arrayNumbers = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
arrayWithRepeteadedNumers = arrayNumbers.filter(function (
  itemInArray,
  indexOfItem,
  arrayReference
) {
  return arrayReference.indexOf(itemInArray) !== indexOfItem;
});
console.log(arrayWithRepeteadedNumers);
var arrayWithRepeteadedNumers = [];
