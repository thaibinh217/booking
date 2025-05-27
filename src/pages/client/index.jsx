import HeroParallax from "../../components/hero-parallax";

const myHotelImages = [
  {
    title: "Sunrise Beach Resort",
    thumbnail: "/hotels/30951071.avif",
    link: "#",
  },
  {
    title: "Mountain View Hotel",
    thumbnail:
      "/hotels/anantara_plaza_nice_hotel_drone_exterior_hotel_hero-crpd-1920x1037.jpg",
    link: "#",
  },
  {
    title: "City Lights Stay",
    thumbnail:
      "/hotels/GUEST-ROOM-STD_clarion_helsinki_airport___media_library_original_4500_3000.webp",
    link: "#",
  },
  {
    title: "Cozy Cabin Retreat",
    thumbnail: "/hotels/SuiteNov2022_0008_1920.webp",
    link: "#",
  },
  {
    title: "Luxury Palace",
    thumbnail: "/hotels/image632.png",
    link: "#",
  },
  {
    title: "Luxury Palace",
    thumbnail: "/hotels/Best Hotel Website Designs.jpg",
    link: "#",
  },
  {
    title: "Luxury Palace",
    thumbnail: "/hotels/hotel-10298563558-2x1.webp",
    link: "#",
  },
  {
    title: "Luxury Palace",
    thumbnail: "/hotels/WhatsApp-Image-2022-08-24-at-11.27.21-AM.jpeg",
    link: "#",
  },
];

const Home = () => {
  return <HeroParallax products={myHotelImages} />;
};

export default Home;
