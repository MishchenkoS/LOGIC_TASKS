function concatString () {
  let str = "";
  
  return function(string = "") {
    if(typeof string !== "string") {
      return null;
    }
    
    return str += string;
  }
}

