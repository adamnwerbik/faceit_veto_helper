import React from "react";
import useSWR from "swr";
import {
  fetchMatchAllUsersStats,
  getPlayerStats,
} from "../serverFunctions/GetInfo";
import { AnalyseData } from "../helperFunctions/AnalyseData";
import { RevolvingDot } from "react-loader-spinner";
import { FadeLoader } from "react-spinners";

const StatsVisualise = (props: { data: any; factionToAnalyse: number }) => {
  const factionIDs: any[] = [];

  if (props.factionToAnalyse === 1) {
    props.data.teams.faction1.roster.map((p: any) =>
      factionIDs.push(p.player_id)
    );
  }
  if (props.factionToAnalyse === 2) {
    props.data.teams.faction2.roster.map((p: any) =>
      factionIDs.push(p.player_id)
    );
  }

  const { data, isLoading, error } = useSWR(
    factionIDs.toString(),
    fetchMatchAllUsersStats
  );

  if (error) {
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return (
      <div className="flex flex-col items-center">
        <div>Fetching match history...</div>
        <div>
          <FadeLoader color="#ff5500" />
        </div>
      </div>
    );
  }
  if (data) {
    const stats = AnalyseData(data);
    return (
      <div className="w-96 mt-6">
        {stats.map((e) =>
          e[0].slice(0, 3) == "de_" ? (
            <div className="w-96 border border-black rounded-md p-1 my-5">
              {e[0]} - {e[1].gamesPlayed} -{" "}
              {`${Math.round((e[1].gamesWon * 100) / e[1].gamesPlayed)}%`}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    );
  }
};

export default StatsVisualise;
