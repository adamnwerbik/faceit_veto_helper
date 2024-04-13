import React from "react";
import useSWR from "swr";
import { getMatchRoomInfo } from "../serverFunctions/GetInfo";

const Results = (props: { matchID: string }) => {
  const { data, error, isLoading } = useSWR(props.matchID, getMatchRoomInfo);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return props.matchID ? (
    <div>
      <div>
        <h2>Group 1</h2>
        {data.teams.faction1.roster.map((e: any) => (
          <p key={e.player_id}>{e.nickname}</p>
        ))}
        <br></br>
        <h2>Group 2</h2>
        {data.teams.faction2.roster.map((e: any) => (
          <p key={e.player_id}>{e.nickname}</p>
        ))}
      </div>
    </div>
  ) : (
    "No ID supplied"
  );
};

export default Results;
