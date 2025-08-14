function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let sum = 0;
  const length = marks.length;
  console.log(length);
  let pass = 0;
  let fail = 0;
  for (let mark of marks) {
    sum += mark;
    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }
  const avg = parseInt(sum / length);
  const result = {
    finalScore: avg,
    pass: pass,
    fail: fail,
  };
  return result;
}
console.log(resultReport(99));
