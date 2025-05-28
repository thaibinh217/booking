import React, { useState } from "react";
import Cards from "../../components/cards";
import Search from "../../components/search";
import Filter from "../../components/HotelFilters";

const Rooms = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    guests: 1,
    location: "",
    maxPrice: "",
    roomType: "",
    hotel: "",
    stars: "",
  });

  const onSearch = () => {
    console.log("Searching with:", { searchQuery, ...filters });
  };

  return (
    <div className="mt-20 px-4 md:px-10">
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
        onSearch={onSearch}
      />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Bộ lọc bên trái */}
        <Filter filters={filters} setFilters={setFilters} />

        {/* Danh sách phòng */}
        <Cards searchQuery={searchQuery} filters={filters} />
      </div>
    </div>
  );
};

export default Rooms;
