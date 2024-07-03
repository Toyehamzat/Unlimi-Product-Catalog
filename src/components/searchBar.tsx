import React from "react";
import { useProductContext } from "../context/productContext";
import { FiSearch } from "react-icons/fi"; // Importing the search icon from Feather icons

function SearchBar() {
  const { searchTerm, setSearchTerm } = useProductContext();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative flex items-center pr-5 max-w-full sm:max-w-[288px]">
      <FiSearch className="absolute left-3 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search by patients..."
        value={searchTerm}
        onChange={handleSearch}
        className="border-2 border-gray-300 rounded-lg pl-10 pr-4 py-1 sm:py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar;
