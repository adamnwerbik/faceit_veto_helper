import { PlayerCardData } from "@/types/FACEIT";
import React from "react";
import PlayerCard from "./PlayerCard";
import StatsVisualise from "./StatsVisualise";

const MatchVisualise = (props: { data: any }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col text-center">
          <h2>Team 1</h2>
          {props.data.teams.faction1.roster.map((e: PlayerCardData) => (
            <PlayerCard playerData={e} />
          ))}
          <div>
            <StatsVisualise data={props.data} factionToAnalyse={1} />
          </div>
        </div>
        <div className="lg:w-20 w-0 h-20"></div>
        <div className="flex flex-col text-center">
          <h2>Team 2</h2>
          {props.data.teams.faction2.roster.map((e: PlayerCardData) => (
            <PlayerCard playerData={e} />
          ))}
          <div>
            <StatsVisualise data={props.data} factionToAnalyse={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchVisualise;
