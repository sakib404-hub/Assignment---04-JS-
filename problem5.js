function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let sum = 0;
  let pass = 0;
  let fail = 0;
  const length = marks.length;
  if (length === 0) {
    result = {
      finalScore: sum,
      pass: pass,
      fail: fail,
    };
    return result;
  } else {
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
}
// console.log(resultReport([99, 87, 67, 12, 87]));
