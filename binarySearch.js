const mergeSort = require("./mergeSort");
// recursive implementation
function binarySearch(array, target, start, end) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target === array[mid]) {
      return mid;
    }

    if (target > array[mid]) {
      return binarySearch(array, target, mid + 1, end);
    } else {
      return binarySearch(array, target, start, mid - 1);
    }
  }
  return "No such Element";
}

// iterative implementation
function binarySearchLoop(array, target) {
  let start = 0;
  let end = array.length - 1;

  if (target === array[start]) return start;
  if (target === array[end]) return end;

  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);
    console.log(mid);
    if (target === array[mid]) return mid;
    else if (target > array[mid]) start = mid + 1;
    else if (target < array[mid]) end = mid - 1;
  }

  return "no such element";
}

const unsortedArray = [5, 2, 1, 3, 6, 4, 7];
mergeSort(unsortedArray, 0, unsortedArray.length - 1);
const sortedArray = unsortedArray;

const searchValue = 1;
console.log(`Find the index of ${searchValue}`);
// console.log(binarySearch(sortedArray, searchValue, 0, sortedArray.length - 1));
console.log(binarySearchLoop(sortedArray, searchValue));
