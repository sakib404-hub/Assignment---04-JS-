function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let strArr = str.split(" ");
  //   console.log(strArr);
  let total = "";
  for (let ele of strArr) {
    total += ele;
  }
  return total;
}

let result = onlyCharacter("Ariyan                  Ahmed Shakib");
console.log(result);
