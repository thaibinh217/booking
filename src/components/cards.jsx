import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const hotelRooms = [
  {
    id: 1,
    hotel: "Hotel 1928",
    name: "Deluxe Room",
    image: "/rooms/HOTEL1928_205PREMIUMKING_1_ALT_REVISE.jpg",
    price: "$120/night",
    stars: 4,
  },
  {
    id: 2,
    hotel: "Populus",
    name: "Ocean View Suite",
    image: "/rooms/Populus-Capitol-Studio-Suite.jpg",
    price: "$200/night",
    stars: 5,
  },
  {
    id: 3,
    hotel: "Presidential Stay",
    name: "Standard Room",
    image: "/rooms/presidential-suite-bedroom1.jpg",
    price: "$90/night",
    stars: 3,
  },
  {
    id: 4,
    hotel: "Grand Lotus",
    name: "Standard Room",
    image: "/rooms/SuiteNov2022_0008_1920.jpg",
    price: "$90/night",
    stars: 3,
  },
  {
    id: 5,
    hotel: "Boca Raton Tower",
    name: "Standard Room",
    image:
      "/rooms/The-Boca-Raton-Tower-ocean-view-studio-suite-double-queen-1920x1080-1.webp",
    price: "$90/night",
    stars: 3,
  },
  {
    id: 6,
    hotel: "TBR Oceanview",
    name: "Standard Room",
    image: "/rooms/TBR_Tower-Oceanview-Guestroom-2-1080x810-9e13d13-1.jpg",
    price: "$90/night",
    stars: 3,
  },
];

const Stars = ({ count }) => {
  return (
    <div className="flex gap-1 mt-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>
          {i < count ? "★" : <span className="text-gray-400 text-base">★</span>}
        </span>
      ))}
    </div>
  );
};

const Cards = () => {
  return (
    <div className="bg-white text-black">
      <h3 className="text-3xl md:text-5xl mt-10 font-bold font-poppins text-center mt-[60px] mb-5 transition-all duration-300 hover:scale-105">
        Rooms
      </h3>
      <div className="mx-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6 mt-5">
        {hotelRooms.map((room) => (
          <Link to={`/room/${room.id}`} className="block" key={room.id}>
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300">
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-52 object-cover  transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-medium text-gray-500">
                  {room.hotel}
                </h4>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <StyledWrapper>
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      <svg
                        className="icon"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                      </svg>
                    </button>
                  </StyledWrapper>
                </div>

                <p className="font-bold">{room.price}</p>
                <Stars count={room.stars} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    position: relative;
    padding: 4px;
    outline: none;
    box-shadow: none;
  }

  .btn:focus {
    outline: none;
    box-shadow: none;
  }

  .btn:hover > .icon {
    transform: scale(1.15);
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .icon {
    width: 20px;
    height: 20px;
    fill: #aaa;
    transition: fill 0.2s ease;
  }

  .btn:focus > .icon {
    fill: #fd1853;
    animation: grosseur 0.2s linear;
  }

  @keyframes grosseur {
    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Cards;
