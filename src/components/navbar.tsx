import { FiBell, FiChevronDown } from "react-icons/fi";
import SearchBar from "./searchBar";

function Navbar() {
  const profileName = "Deko";
  //   const profilePicUrl = "https://example.com/profile-pic.jpg";
  return (
    <div className="bg-white py-5 px-8 relative shadow-md">
      <div className="flex text-center items-center justify-between">
        <div className="flex flex-row gap-10 items-center">
          <div className="text-4xl text-blue-900 font-extrabold">
            Unlimi<span className="text-red-600">.</span>
          </div>
          <SearchBar />
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <FiBell size={24} className="text-gray-600 cursor-pointer" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </div>

          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-black object-cover cursor-pointer"></div>
            <span className="font-medium text-gray-700">{profileName}</span>
            <FiChevronDown size={20} className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
