function getBiggestAndSmallest (array) {
  if(Array.isArray(array)) {
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

console.log(getBiggestAndSmallest([5,3,6,2,10]))