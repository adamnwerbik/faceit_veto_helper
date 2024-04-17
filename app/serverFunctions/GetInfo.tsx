"use server";

export async function getMatchRoomInfo(matchID: string) {
  if (!matchID) {
    throw new Error("No link provided!");
  }
  const res = await fetch(
    `https://open.faceit.com/data/v4/matches/${matchID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.MYFACEITKEY}`,
      },
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function getPlayerStats(
  playerID: string,
  game: string,
  offset: number,
  limit: number
) {
  console.log(`Fetching data for player: ${playerID}`);
  const res = await fetch(
    `https://open.faceit.com/data/v4/players/${playerID}/games/${game}/stats?offset=${offset}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.MYFACEITKEY}`,
      },
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function fetchMatchAllUsersStats(matchData: string) {
  const factionMatchesData: any[] = [];
  await Promise.all(
    JSON.parse(matchData).map(async (p: any) =>
      factionMatchesData.push(await getPlayerStats(p.player_id, "cs2", 0, 100))
    )
  );
  return factionMatchesData;
}
