import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-black shadow-md sticky top-0 z-10">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Artistly
      </h1>
      <div className="space-x-6 text-base text-white font-medium">
        <Link href="/" className="hover:text-pink-400">Home</Link>
        <Link href="/artists" className="hover:text-pink-400">Artists</Link>
        <Link href="/onboard">Onboard Artist</Link>
        <Link href="/dashboard" className="hover:text-pink-400">Dashboard</Link>
      </div>
    </nav>
  );
}
