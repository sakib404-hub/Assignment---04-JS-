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

let result = bestTeam(
  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
);
console.log(result);
