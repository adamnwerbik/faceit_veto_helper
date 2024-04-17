import React from "react";
import useSWR from "swr";

const StatsVisualise = (props: { data: any }) => {
  const faction1IDs: any[] = [];
  const faction2IDs: any[] = [];

  props.data.teams.faction1.roster.map((p: any) =>
    faction1IDs.push(p.player_id)
  );
  props.data.teams.faction2.roster.map((p: any) =>
    faction2IDs.push(p.player_id)
  );

  const { data: playerMatches, isLoading, error } = useSWR("");
  if (error) {
    return <div>Error fetching player data - try again later</div>;
  }
  if (isLoading) {
    return <div>Loading data</div>;
  }

  return <div>{JSON.stringify(faction1IDs)}</div>;
};

export default StatsVisualise;
