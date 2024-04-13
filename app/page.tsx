"use client";

import { useState } from "react";
import MatchInputURLForm from "./components/MatchInputURLForm";
import Results from "./components/Results";
import { Test } from "./components/Test";

export default function Home() {
  const [requestedMatchID, setRequestedMatchID] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <MatchInputURLForm submitFn={setRequestedMatchID} />
      <Results matchID={requestedMatchID}></Results>
      <div>
        <Test />
      </div>
    </main>
  );
}
