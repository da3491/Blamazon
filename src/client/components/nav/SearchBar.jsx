import { HiSearch } from "react-icons/hi";

import CategoryFilter from "./CategoryFilter";

const SearchBar = () => {
  return (
    <form className="rounded overflow-hidden flex items-center flex-1 w-auto text-black">
      <CategoryFilter />
      <input
        type="text"
        placeholder="Search Blamazon"
        className="flex-grow h-10 pl-2 focus-visible:outline-none"
      />
      <button className="bg-orange-300 w-12 h-10">
        <HiSearch className="text-black text-3xl mx-auto" />
      </button>
    </form>
  );
};

export default SearchBar;
