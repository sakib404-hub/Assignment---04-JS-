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

let result = bestTeam(
  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
);
console.log(result);
