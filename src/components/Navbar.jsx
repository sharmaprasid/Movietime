import NavbarItems from "./NavbarItems";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex  justify-center gap-3 dark:bg-gray-600 bg-blue-100 lg:text-lg p-4">
      <NavbarItems title="Trending" param="top trending" />
      <NavbarItems title="TopRated" param="top rated" />
      <NavbarItems title="Upcoming" param="release" />
    </div>
  );
};

export default Navbar;
