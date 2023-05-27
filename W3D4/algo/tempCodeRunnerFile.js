competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

results = [0, 0, 1];

function tournamentWinner(competitions, results) {
  let winner = { score: 0, name: "" };
  const scoreMap = {};
  for (let i = 0; i < competitions.length; i++) {
    let homeTeam = competitions[i][0];
    let awayTeam = competitions[i][1];

    if (results[i] === 0) {
      scoreMap[awayTeam] = (scoreMap[awayTeam]) + 3;
      console.log(scoreMap)
    } else {
      scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3;
    }

    if (scoreMap[awayTeam] >= winner.score) {
      winner = { score: scoreMap[awayTeam], name: awayTeam };
    } else if (scoreMap[homeTeam] >= winner.score) {
      winner = { score: scoreMap[homeTeam], name: homeTeam };
    }
  }
  return winner.name;
}


tournamentWinner(competitions, results)
