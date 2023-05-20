import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-head font-extrabold text-8xl text-center">
          the diary that stays with you
        </h1>

        <Link
          href="/app"
          className="text-2xl font-medium border-2 rounded-full py-4 px-8 hover:border-indigo-400 hover:text-indigo-400 transition-all"
        >
          Start your journey
        </Link>
      </div>
    </div>
  );
}
