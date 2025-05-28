import React from "react";
import styled from "styled-components";

const Search = ({ searchQuery, setSearchQuery, filters, setFilters }) => {
  return (
    <SearchWrapper className="mb-2">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Tìm kiếm theo tên phòng / khách sạn */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search rooms or hotels..."
          className="col-span-2"
        />

        {/* Từ ngày */}
        <input
          type="date"
          value={filters.fromDate}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, fromDate: e.target.value }))
          }
        />

        {/* Đến ngày */}
        <input
          type="date"
          value={filters.toDate}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, toDate: e.target.value }))
          }
        />

        {/* Số người */}
        <input
          type="number"
          min={1}
          value={filters.guests}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, guests: e.target.value }))
          }
          placeholder="Guests"
        />
      </div>

      <div className="flex justify-end mt-4">
        <StyledButton>
          <button>
            <p>Search</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={4}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </StyledButton>
      </div>
    </SearchWrapper>
  );
};
const SearchWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 2rem 1rem;
  margin-top: 5rem;
  border-radius: 16px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    transition: 0.2s;

    &:focus {
      outline: none;
      border-color: #000;
      box-shadow: 0 0 0 2px #00000022;
    }
  }
`;

const StyledButton = styled.div`
  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    --primary-color: #111;
    --hovered-color: #1e3a8a;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 20px;
    position: relative;
  }

  button p {
    color: var(--primary-color);
    position: relative;
  }

  button::after {
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    bottom: -6px;
    background: var(--hovered-color);
    height: 2px;
    transition: 0.3s ease-out;
  }

  button p::before {
    content: "Search";
    position: absolute;
    width: 0%;
    inset: 0;
    color: var(--hovered-color);
    overflow: hidden;
    transition: 0.3s ease-out;
  }

  button:hover::after {
    width: 100%;
  }

  button:hover p::before {
    width: 100%;
  }

  button:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
  }

  svg {
    color: var(--primary-color);
    transition: 0.2s;
    width: 18px;
    transition-delay: 0.2s;
  }
`;

export default Search;
