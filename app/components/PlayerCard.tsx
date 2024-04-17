import React from "react";
import dynamic from "next/dynamic";
import { MdShield } from "react-icons/md";
import { PlayerCardData } from "@/types/FACEIT";

const PlayerCard = (props: { playerData: PlayerCardData }) => {
  const GaugeComponent = dynamic(() => import("react-gauge-component"), {
    ssr: false,
  });
  return (
    <div className="h-24 w-96 flex flex-row bg-gray-950 text-white border border-gray-300 rounded-md">
      <div className="w-1/3 h-full flex flex-col items-center justify-center relative">
        {props.playerData.avatar ? (
          <img
            className="ml-5 p-2 h-20  rounded-full"
            src={props.playerData.avatar}
          />
        ) : (
          <img
            className="ml-5 p-2 h-20  rounded-full"
            src="/defaultPlayerAvatar.png"
          />
        )}
        {props.playerData.anticheat_required ? (
          <MdShield
            size={20}
            className="absolute bottom-1 left-[4.2rem]"
            color="#AAFF00"
            style={{ border: "3px", borderColor: "black" }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col w-full text-left pl-5 justify-center">
        <h3 className="font-bold">{props.playerData.game_player_name}</h3>
        <h4 className="italic">{props.playerData.nickname}</h4>
      </div>
      <div className="w-24 h-24 font-bold flex flex-col items-center justify-center pr-4 ">
        LVL_{props.playerData.game_skill_level}
      </div>
    </div>
  );
};

export default PlayerCard;
