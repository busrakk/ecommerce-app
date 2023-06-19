import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setIsSearchVisible(false);
        setSearchResults([]); // Search listesini temizle
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/products?search=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="z-50 md:flex hidden w-[850px]" ref={searchInputRef}>
      <form onSubmit={handleSearch}>
        <div className="relative text-gray-600 border-gray-100 rounded-lg rounded-t border-b">
          <input
            onClick={handleSearch}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-[850px]"
            type="search"
            name="search"
            placeholder="Aradığınız ürünü yazınız..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="absolute right-0 top-0 mt-2 mr-4"
          >
            <BiSearchAlt2 size={25} />
          </button>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="absolute shadow-2xl z-50 flex flex-col mt-[45px] bg-gray-50 shadow-3xl top-100 w-[850px] top-6 group-hover:md:block hover:md:block rounded">
          {searchResults.map((result) => (
            <Link
              to={`/product/${result.id}`}
              key={result.id}
              className="stack block z-50 hover:bg-indigo-100 hover:text-white cursor-pointer"
            >
              <div className="flex items-center p-4 pl-2 border-transparent border-gray-100 rounded-t border-border-l-2 relative">
                <div className="w-700 items-center flex">
                  <div className="mx-6 -mt-1 ">
                    <div className="text-gray-800 text-sm hover:text-indigo-600">
                      {result.name}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
