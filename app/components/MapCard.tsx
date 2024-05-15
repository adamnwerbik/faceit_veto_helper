import React from "react";

const MapCard = (props: { data: any }) => {
  return (
    <div className="w-96 border rounded-md p-1 my-5 flex flex-row shadow-md border-gray-200">
      <div>
        <img
          src={`/mapicons/collection_icon_${props.data[0]}.png`}
          className="size-12"
        />
      </div>
      <div className="flex flex-col ml-5 text-left">
        <div>Times played: {props.data[1].gamesPlayed}</div>
        <div>
          Win percentage:{" "}
          {`${Math.round(
            (props.data[1].gamesWon * 100) / props.data[1].gamesPlayed
          )}%`}
        </div>
      </div>
    </div>
  );
};

export default MapCard;
