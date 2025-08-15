function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  const lengthOne = arr1.length;
  const lengthtwo = arr2.length;
  //   console.log(lengthOne);
  //   console.log(lengthtwo);

  if (lengthOne === lengthtwo) {
    for (let i = 0; i < lengthOne; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isSame([1, undefined, 3], [1, null, 3]));
