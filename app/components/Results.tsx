import React from "react";
import useSWR from "swr";
import { getMatchRoomInfo } from "../serverFunctions/GetInfo";
import PlayerDataAnal from "./PlayerDataAnal";

const Results = (props: { matchID: string }) => {
  const { data, error, isLoading } = useSWR(props.matchID, getMatchRoomInfo);
  if (error) return <div>Failed to load data...</div>;
  if (isLoading) return <div>Loading data...</div>;
  return props.matchID ? (
    <div>
      <PlayerDataAnal matchData={data} />
    </div>
  ) : (
    "No ID supplied"
  );
};

export default Results;
