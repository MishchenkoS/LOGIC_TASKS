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
