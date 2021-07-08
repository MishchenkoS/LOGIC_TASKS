function reverseString(string) {
  if(typeof string !== 'string') {
    return null;
  }

  let str = "";

  for(let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }

  return str;
}
