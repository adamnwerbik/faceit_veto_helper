import Image from "next/image";
import { Test } from "./components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <Test />
    </main>
  );
}
