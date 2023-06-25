import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href='/login' className="text-black bg-zinc-300">Log In</Link>
    </main>
  )
}
