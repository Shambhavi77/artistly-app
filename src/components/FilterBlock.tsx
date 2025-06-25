type Filters = {
  category: string;
  location: string;
  price: string;
};

interface FilterProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FilterBlock({ filters, setFilters }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <select
        className="bg-gray-800 text-white p-2 rounded"
        value={filters.category}
        onChange={(e) =>
          setFilters((prev: Filters) => ({
            ...prev,
            category: e.target.value
          }))
        }
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      <input
        type="text"
        className="bg-gray-800 text-white p-2 rounded"
        placeholder="Location"
        value={filters.location}
        onChange={(e) =>
          setFilters((prev: Filters) => ({
            ...prev,
            location: e.target.value
          }))
        }
      />

      <select
        className="bg-gray-800 text-white p-2 rounded"
        value={filters.price}
        onChange={(e) =>
          setFilters((prev: Filters) => ({
            ...prev,
            price: e.target.value
          }))
        }
      >
        <option value="">All Price Ranges</option>
        <option value="₹5k - ₹15k">₹5k - ₹15k</option>
        <option value="₹10k - ₹25k">₹10k - ₹25k</option>
        <option value="₹25k - ₹50k">₹25k - ₹50k</option>
      </select>
    </div>
  );
}
