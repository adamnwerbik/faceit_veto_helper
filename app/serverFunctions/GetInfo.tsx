"use server";

export async function getMatchRoomInfo(matchID: string) {
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
