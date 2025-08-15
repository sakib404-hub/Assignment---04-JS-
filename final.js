// Problem - 1
function totalFine(price) {
  if (price <= 0 || typeof price !== "number") {
    return "Invalid";
  }
  const extraServiceCharge = 30;
  const total = price + price * 0.2 + extraServiceCharge;
  return total;
}

//Problem - 2 ------>
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = str.split(" ").join("").toUpperCase();
  return result;
}

//Problem - 3 ----->
function bestTeam(teamOne, teamTwo) {
  if (typeof teamOne !== "object" || typeof teamTwo !== "object") {
    return "Invalid";
  }
  const teamOneFairPlay = teamOne.foul + teamOne.cardY + teamOne.cardR;
  const teamtwoFairPlay = teamTwo.foul + teamTwo.cardY + teamTwo.cardR;
  if (teamOneFairPlay === teamtwoFairPlay) {
    return "Tie";
  } else if (teamOneFairPlay < teamtwoFairPlay) {
    return teamOne.name;
  } else {
    return teamTwo.name;
  }
}

// Problem - 4 --->
function isSame(arrayOne, arraytwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arraytwo)) {
    return "Invalid";
  }
  const lengthOne = arrayOne.length;
  const lengthtwo = arraytwo.length;

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

// Problem - 5 ---------->

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
// console.log(resultReport(99));
