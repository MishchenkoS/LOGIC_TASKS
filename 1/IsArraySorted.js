function isArraySorted (array) {
  if(!(array instanceof Array)) {
    return null;
  }
    
  for(let i = 1; i < array.length; i++) {
    if(array[i-1] > array[i]) {
      return false;
    }
  }

  return true;
}
