import React from "react";
import { getMatchRoomInfo } from "../serverFunctions/GetInfo";

export const Test = async () => {
  try {
    const data = await getMatchRoomInfo(
      "1-dd8bb485-118e-48c1-8e1f-aa80721c1c37"
    );

    return (
      <div>
        <h1>Users</h1>
        {data.match_id}
      </div>
    );
  } catch (error) {
    return <div>Something went wrong fetching data</div>;
  }
};
