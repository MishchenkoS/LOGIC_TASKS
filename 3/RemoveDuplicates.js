function removeDuplicates(array) {
  if(!Array.isArray(array)) {
    return null;
  }
  
  const map = new Map();

  array.forEach((item)=>{
    map.set(item.id, item);
  });

  const resultArr = [];

  map.forEach((item) => {
    resultArr.push(item);
  });

  return resultArr;
}
