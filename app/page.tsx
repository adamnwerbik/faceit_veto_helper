"use client";

import { useState } from "react";
import MatchInputURLForm from "./components/MatchInputURLForm";
import Results from "./components/Results";
import Test from "./components/Test";

export default function Home() {
  const [requestedMatchID, setRequestedMatchID] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>FACEIT VETO HELPER</h1>
      <MatchInputURLForm submitFn={setRequestedMatchID} />
      <Results matchID={requestedMatchID}></Results>
      <Test></Test>
    </main>
  );
}
