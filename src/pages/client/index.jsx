import React, { useState } from "react";
import HeroParallax from "../../components/hero-parallax";
import Infinite from "../../components/infinite";
import Cards from "../../components/cards";
import Search from "../../components/search";

const myHotelImages = [
  {
    thumbnail: "/hotels/30951071.avif",
    link: "#",
  },
  {
    thumbnail:
      "/hotels/anantara_plaza_nice_hotel_drone_exterior_hotel_hero-crpd-1920x1037.jpg",
    link: "#",
  },
  {
    thumbnail:
      "/hotels/GUEST-ROOM-STD_clarion_helsinki_airport___media_library_original_4500_3000.webp",
    link: "#",
  },
  {
    thumbnail: "/hotels/SuiteNov2022_0008_1920.webp",
    link: "#",
  },
  {
    thumbnail: "/hotels/image632.png",
    link: "#",
  },
  {
    thumbnail: "/hotels/Best Hotel Website Designs.jpg",
    link: "#",
  },
  {
    thumbnail: "/hotels/hotel-10298563558-2x1.webp",
    link: "#",
  },
  {
    thumbnail: "/hotels/WhatsApp-Image-2022-08-24-at-11.27.21-AM.jpeg",
    link: "#",
  },
];
const discountItem = [
  {
    image: "/discounts/1600w-4F8uh-_QA7E.webp",
  },
  {
    image: "/discounts/blackfriday24-website-1366x410-EN.jpg",
  },
  {
    image: "/discounts/emtstay-12may25-lp.webp",
  },
  {
    image:
      "/discounts/hotel-flyer-design-template-93c24d34a09ea1005cf6cd80e66049af_screen.jpg",
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    guests: 1,
  });
  const onSearch = () => {
    // Xử lý logic hoặc console.log(filters)
    console.log("Searching with:", { searchQuery, ...filters });
  };

  return (
    <>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
        onSearch={onSearch}
      />

      <HeroParallax products={myHotelImages} />
      <h3 className="text-3xl md:text-5xl font-bold font-poppins text-center text-black dark:text-white mt-[-60px] mb-5 transition-all duration-300 hover:scale-105">
        Discounts
      </h3>

      <Infinite items={discountItem} />

      <Cards className="" />
    </>
  );
};

export default Home;
