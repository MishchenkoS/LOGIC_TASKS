function getAvarage (array) {
  if(!(array instanceof Array)) {
    return null;
  }
  
  let sum = 0;

  for(let item of array) {
    sum += item;
  }

  return sum / array.length;
}

