import React from "react";
import useSWR from "swr";
import { getMatchRoomInfo } from "../serverFunctions/GetInfo";

const Results = (props: { matchID: string }) => {
  const { data, error, isLoading } = useSWR(props.matchID, getMatchRoomInfo);
  if (error) return <div>Failed to load data...</div>;
  if (isLoading) return <div>Loading data...</div>;
  return props.matchID ? (
    <div>
      <div>
        <h2>Group 1</h2>
        {data.teams.faction1.roster.map((e: any) => (
          <p key={e.player_id}>
            {e.nickname} - {e.game_player_id}
          </p>
        ))}
        <br></br>
        <h2>Group 2</h2>
        {data.teams.faction2.roster.map((e: any) => (
          <p key={e.player_id}>
            {e.nickname} - {e.game_player_id}
          </p>
        ))}
      </div>
    </div>
  ) : (
    "No ID supplied"
  );
};

export default Results;
