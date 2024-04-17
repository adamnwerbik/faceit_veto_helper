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

export async function getPlayerStats(playerID: string) {
  console.log(`Fetching data for player: ${playerID}`);
  const res = await fetch(
    `https://open.faceit.com/data/v4/players/${playerID}/games/${"cs2"}/stats?offset=${0}&limit=${100}`,
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

// Only fetch last 100; @TODO to fetch all
export async function fetchMatchAllUsersStats(playerIDs: string) {
  const ids = playerIDs.split(",");
  const factionMatchesData: any[] = [];
  await Promise.all(
    ids.map(async (p: any) => factionMatchesData.push(await getPlayerStats(p)))
  );
  return factionMatchesData;
}
