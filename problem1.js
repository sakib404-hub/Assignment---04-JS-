function totalFine(price) {
  if (price <= 0 || typeof price !== "number") {
    return "Invalid";
  }
  const extraServiceCharge = 30;
  const total = price + price * 0.2 + extraServiceCharge;
  return total;
}

let result = totalFine(0);
console.log(result);
