function isArraySorted (array) {
  if(Array.isArray(array)) {
    
    for(let i = 1; i < array.length; i++) {
      if(array[i-1] > array[i]) {
        return false;
      }
    }

    return true;
  }
  return null;
}

console.log(isArraySorted([1, 3, 5, 5, 7, 9]))