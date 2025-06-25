"use client";

import { useState, useEffect } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import artistsData from "@/data/artists.json";

export default function ArtistsPage() {
  const [filteredArtists, setFilteredArtists] = useState(artistsData);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
  });

  useEffect(() => {
    const filtered = artistsData.filter((artist) => {
      return (
        (filters.category ? artist.category === filters.category : true) &&
        (filters.location ? artist.location.includes(filters.location) : true) &&
        (filters.price ? artist.priceRange === filters.price : true)
      );
    });
    setFilteredArtists(filtered);
  }, [filters]);

  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Artists</h1>

      <FilterBlock filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {filteredArtists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </main>
  );
}
