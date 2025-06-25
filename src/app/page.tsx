"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const categories = ["Singers", "Dancers", "DJs", "Speakers"];

  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Section: Explore Categories */}
      <section id="explore" className="w-full px-8 py-16 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-10">Explore Artist Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg text-center cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white">{category}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/artists"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
          >
            Explore All Artists
          </Link>
        </div>
      </section>

      {/* Section: About Artistly */}
      <section id="about" className="w-full px-8 py-16 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-10">About Artistly</h2>
        <div className="border border-gray-600 rounded-xl p-8 max-w-4xl mx-auto bg-gray-950 bg-opacity-50">
          <p className="text-lg text-gray-300 leading-relaxed">
            Artistly is a next-gen platform that connects talented performers with event planners.
            Whether you're hosting a wedding, corporate event, or festival — we help you find,
            evaluate, and book the right artists with ease. Our mission is to elevate live
            entertainment experiences with powerful yet simple tools for artist discovery and booking.
          </p>
        </div>
      </section>

      {/* Section: Why Choose Artistly */}
      <section id="why" className="w-full px-8 py-16 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Artistly?</h2>
        <div className="border border-gray-600 rounded-xl p-8 max-w-3xl mx-auto bg-gray-950 bg-opacity-50">
          <ul className="list-disc text-left text-lg text-gray-300 space-y-4 pl-6">
            <li>Simple & intuitive artist discovery tools</li>
            <li>Fast, secure & mobile-friendly platform</li>
            <li>Seamless availability and quote requests</li>
            <li> Reliable — used by hundreds of event organizers</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
