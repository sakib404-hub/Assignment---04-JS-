// Problem - 1
function totalFine(price) {
  if (price <= 0 || typeof price !== "number") {
    return "Invalid";
  }
  const extraServiceCharge = 30;
  const total = price + price * 0.2 + extraServiceCharge;
  return total;
}

// let result = totalFine(552);
// console.log(result);

//Problem - 2 ------>
function onlyCharacters(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = str.split(" ").join("").toUpperCase();
  return result;
}
// console.log(onlyCharacters("I want to be part of something big"));

//Problem - 3 ----->
function bestTeam(teamOne, teamTwo) {
  if (typeof teamOne !== "object" || typeof teamTwo !== "object") {
    return "Invalid";
  }
  //   console.log(teamOne);
  //   console.log(teamTwo);
  const teamOneFairPlay = teamOne.foul + teamOne.cardY + teamOne.cardR;
  const teamtwoFairPlay = teamTwo.foul + teamTwo.cardY + teamTwo.cardR;
  //   console.log(teamOneFairPlay);
  //   console.log(teamtwoFairPlay);
  if (teamOneFairPlay === teamtwoFairPlay) {
    return "Tie";
  } else if (teamOneFairPlay < teamtwoFairPlay) {
    return teamOne.name;
  } else {
    return teamTwo.name;
  }
}

// let result1 = bestTeam(
//   { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
//   { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
// );
// console.log(result1);

// Problem - 4 --->
function isSame(arrayOne, arraytwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arraytwo)) {
    return "Invalid";
  }
  const lengthOne = arrayOne.length;
  const lengthtwo = arraytwo.length;
  //   console.log(lengthOne);
  //   console.log(lengthtwo);

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

// console.log(isSame([1, undefined, 3], [1, null, 3]));

// Problem - 5 ---------->

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
// console.log(resultReport(99));
