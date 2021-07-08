function calculateFactorial(number) {
  if(typeof number !== 'number') {
    return null;
  }
  
  if(number === 1) {
    return 1;
  }

  return number * calculateFactorial(number - 1);
}
