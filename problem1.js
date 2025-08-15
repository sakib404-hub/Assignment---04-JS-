function totalFine(fare) {
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }
  const extraServiceCharge = 30;
  const total = fare + fare * 0.2 + extraServiceCharge;
  return total;
}

let result = totalFine(0);
console.log(result);
