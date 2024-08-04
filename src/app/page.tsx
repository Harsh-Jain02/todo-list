import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row w-full min-h-screen bg-yellow-800 items-center justify-center">
  <div className="flex text-xl bg-green-500 w-1/2 h-full items-center justify-center">Hello</div>
  <div className="flex text-xl bg-blue-400 w-1/2 h-full items-center justify-center">Hello</div>
</div>

  );
}
