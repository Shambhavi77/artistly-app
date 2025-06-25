import { motion } from "framer-motion";

interface Artist {
  name: string;
  category: string;
  priceRange: string;
  location: string;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
      <p className="text-sm text-gray-300">Category: {artist.category}</p>
      <p className="text-sm text-gray-300">Location: {artist.location}</p>
      <p className="text-sm text-gray-300 mb-4">Price: {artist.priceRange}</p>
      <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
        Ask for Quote
      </button>
    </div>
  );
}
