function getAvarage (array) {
  if(array instanceof Array) {
    let sum = 0;

    for(let item of array) {
      sum += item;
    }

    return sum / array.length;
  }
  return null;
}

