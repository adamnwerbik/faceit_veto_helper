import React from "react";
import useSWR from "swr";
import { fetchMatchAllUsersStats } from "../serverFunctions/GetInfo";

const PlayerDataAnal = (props: { matchData: any }) => {
  const team1 = props.matchData.teams.faction1.roster;
  const team2 = props.matchData.teams.faction2.roster;

  const { data: dataFaction1, error: error1 } = useSWR(
    JSON.stringify(team1),
    fetchMatchAllUsersStats
  );
  const { data: dataFaction2, error: error2 } = useSWR(
    JSON.stringify(team2),
    fetchMatchAllUsersStats
  );

  return (
    <div>
      <div>{JSON.stringify(dataFaction1)}</div>
      <br />
      <div>{JSON.stringify(team2)}</div>
    </div>
  );
};
export default PlayerDataAnal;
