"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-blue-600 disabled:text-gray-400"
      >
        <AiOutlineSearch size={30} />
      </button>
    </form>
  );
};
export default SearchBar;
