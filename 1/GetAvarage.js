function getAvarage (array) {
  if(Array.isArray(array)) {
    let sum = 0;
    array.forEach((item) => {
      sum += item;
    });

    return sum / array.length;
  }
  return null;
}

console.log(getAvarage([5,3,6,2,3]))