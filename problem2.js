// Way - 1 Of solving problem2
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let strArr = str.split(" ");
  //   console.log(strArr);
  let total = "";
  for (let ele of strArr) {
    total += ele.toUpperCase();
  }
  return total;
}

let result = onlyCharacter("Serv er :  : Do wn   fuck");
console.log(result);

// way - 2
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const removeSpace = str.toUpperCase().replace(/\s+/g, "");
  /**
   * toUpperCase Will take all the letter to uppercase like 'Hellow World' will be 'HELLOW WORLD'
   * /.............../ This means to first and last and in the middle and takes the regular expression
   * \s ---------> Matches any white space charaters like space, tabes,  and white space
   * + ----------> matches one or more occurence
   * g ----------> Global Flag replaces all the matches not just the flag
   */
  return removeSpace;
}
console.log(onlyCharacter("Serv er :  : Do wn"));

// way - 3

function onlyCharacters(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = str.split(" ").join("").toUpperCase();
  console.log(typeof result);
  return result;
}

console.log(onlyCharacters("Hellow     World   "));
