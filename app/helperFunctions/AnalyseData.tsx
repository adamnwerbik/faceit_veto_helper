export function AnalyseData(factionDataToAnalyse: any) {
  let statsHM = new Map();
  factionDataToAnalyse.forEach((player: any) => {
    player.items.forEach((game: any) => {
      console.log(game.stats.Map);
      if (statsHM.has(game.stats.Map)) {
        statsHM.set(game.stats.Map, {
          matches_played: statsHM.get(game.stats.Map).matches_played + 1,
        });
      } else {
        statsHM.set(game.stats.Map, {
          matches_played: 0,
          matches_won: 0,
          rounds_played: 0,
          rounds_won: 0,
        });
      }
    });
  });
  return statsHM;
}
