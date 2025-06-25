// ✅ src/app/dashboard/page.tsx
"use client";

const mockArtists = [
  {
    name: "Aria Singh",
    category: ["Singer"],
    location: "Mumbai",
    priceRange: "₹10k - ₹25k"
  },
  {
    name: "Ravi Mehta",
    category: ["DJ", "Speaker"],
    location: "Delhi",
    priceRange: "₹25k - ₹50k"
  },
  {
    name: "Leena Dancer",
    category: ["Dancer"],
    location: "Chennai",
    priceRange: "₹5k - ₹15k"
  }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-500">Artist Submissions Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-left">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Fee</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockArtists.map((artist, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="py-3 px-4">{artist.name}</td>
                <td className="py-3 px-4">{artist.category.join(", ")}</td>
                <td className="py-3 px-4">{artist.location}</td>
                <td className="py-3 px-4">{artist.priceRange}</td>
                <td className="py-3 px-4">
                  <button className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
