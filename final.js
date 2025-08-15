// Problem - 1
function totalFine(fare) {
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }
  const extraServiceCharge = 30;
  const total = fare + fare * 0.2 + extraServiceCharge;
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
function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  const player1FairPlay = player1.foul + player1.cardY + player1.cardR;
  const player2FairPlay = player2.foul + player2.cardY + player2.cardR;
  if (player1FairPlay === player2FairPlay) {
    return "Tie";
  } else if (player1FairPlay < player2FairPlay) {
    return player1.name;
  } else {
    return player2.name;
  }
}

// Problem - 4 --->
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
