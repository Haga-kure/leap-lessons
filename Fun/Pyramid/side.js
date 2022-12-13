function pyramid(rowLength) {
  let result = "";
  for (let i = 1; i < rowLength; i++) {
    for (let j = 0; j < rowLength - i; j++) {
      result += " ";
    }
    for (let j = 0; j < i; j++) {
      result += "* ";
    }
    result += "\n";
  }
  console.log(result);
}
pyramid(100);
