import React from "react";
import useSWR from "swr";
import {
  fetchMatchAllUsersStats,
  getPlayerStats,
} from "../serverFunctions/GetInfo";

const StatsVisualise = (props: { data: any }) => {
  const faction1IDs: any[] = [];
  const faction2IDs: any[] = [];

  props.data.teams.faction1.roster.map((p: any) =>
    faction1IDs.push(p.player_id)
  );
  props.data.teams.faction2.roster.map((p: any) =>
    faction2IDs.push(p.player_id)
  );

  const {
    data: dataFaction1,
    isLoading: isLoadingFaction1,
    error: isErrorFaction1,
  } = useSWR(faction1IDs.toString(), fetchMatchAllUsersStats);
  const {
    data: dataFaction2,
    isLoading: isLoadingFaction2,
    error: isErrorFaction2,
  } = useSWR(faction2IDs.toString(), fetchMatchAllUsersStats);

  if (isErrorFaction1 || isErrorFaction2) {
    return <div>Somethign went wrong</div>;
  }
  if (isLoadingFaction2 || isLoadingFaction2) {
    return <div>Loading</div>;
  }
  if (dataFaction1 && dataFaction2) {
    return (
      <div className="flex flex-row">
        <div className="w-96">A</div>
        <div className="w-24">A</div>
        <div>C</div>
      </div>
    );
  }
};

export default StatsVisualise;
