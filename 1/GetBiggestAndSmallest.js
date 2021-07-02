function getBiggestAndSmallest (array) {
  if(array instanceof Array) {
    let smallest = array[0];
    let biggest = array[0];
    
    for(let i = 1; i < array.length; i++) {
      if(array[i] > biggest) {
        biggest = array[i];
      }
      if(array[i] < smallest) {
        smallest = array[i];
      } 
    }

    return {
      min: smallest, 
      max: biggest
    };
  }
  return null;
}
