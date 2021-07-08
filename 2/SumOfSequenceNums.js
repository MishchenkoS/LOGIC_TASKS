function sumOfSequenceNums(number) {
  if(typeof number !== 'number') {
    return null;
  }

  if(number === 1) {
    return 1;
  }

  return number + sumOfSequenceNums(number - 1);
}

