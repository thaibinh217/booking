import React from "react";

const HotelFilters = ({ filters, setFilters }) => {
  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <aside className="w-full md:w-64 p-6 bg-white rounded-xl shadow border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        {activeFiltersCount > 0 && (
          <span className="text-sm text-blue-600">
            {activeFiltersCount} selected
          </span>
        )}
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, location: e.target.value }))
          }
          placeholder="e.g. New York"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      {/* Max Price */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Max Price:
          <span className="text-blue-600 font-semibold ml-2">
            ${filters.maxPrice || 500}
          </span>
        </label>
        <input
          type="range"
          min={50}
          max={1000}
          step={10}
          value={filters.maxPrice || 500}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
      </div>

      {/* Guests */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Guests</label>
        <input
          type="number"
          min={1}
          value={filters.guests}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, guests: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      {/* Room Type */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Room Type</label>
        <select
          value={filters.roomType}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, roomType: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        >
          <option value="">All</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      {/* Hotel Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Hotel</label>
        <select
          value={filters.hotel}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, hotel: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        >
          <option value="">All</option>
          <option value="Hotel 1928">Hotel 1928</option>
          <option value="Populus">Populus</option>
          <option value="TBR Oceanview">TBR Oceanview</option>
          <option value="Presidential Stay">Presidential Stay</option>
        </select>
      </div>

      {/* Stars */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Stars</label>
        <select
          value={filters.stars}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, stars: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        >
          <option value="">All</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★</option>
          <option value="3">★★★</option>
          <option value="2">★★</option>
          <option value="1">★</option>
        </select>
      </div>
      <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.414 5.414a1 1 0 00-.293.707v6.172a1 1 0 01-.553.894l-4 2A1 1 0 019 21V13.828a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        <span>Filter</span>
      </button>
    </aside>
  );
};

export default HotelFilters;
