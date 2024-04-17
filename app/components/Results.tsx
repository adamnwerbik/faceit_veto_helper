import React from "react";
import useSWR from "swr";
import { getMatchRoomInfo } from "../serverFunctions/GetInfo";
import StatsVisualise from "./StatsVisualise";
import MatchVisualise from "./MatchVisualise";

const Results = (props: { matchID: string }) => {
  const { data, error, isLoading } = useSWR(props.matchID, getMatchRoomInfo);
  if (error) return <div>Failed to load data...</div>;
  if (isLoading) return <div>Loading data...</div>;
  return props.matchID ? (
    <div>
      <MatchVisualise data={data} />
    </div>
  ) : (
    "No ID supplied"
  );
};

export default Results;
