import React from "react";
import { Test } from "./Test";

const Results = (props: { matchID?: string }) => {
  return props.matchID ? (
    <div>
      <Test></Test>
    </div>
  ) : (
    ""
  );
};

export default Results;
