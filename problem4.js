function isSame(arrayOne, arraytwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arraytwo)) {
    return "Invalid";
  }
  const lengthOne = arrayOne.length;
  const lengthtwo = arraytwo.length;
  console.log(lengthOne);
  console.log(lengthtwo);

  if (lengthOne === lengthtwo) {
    for (let i = 0; i < lengthOne; i++) {
      if (arrayOne[i] !== arraytwo[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isSame([1, undefined, 3], [1, null, 3]));

let number = undefined;
console.log(typeof number);
