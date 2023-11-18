import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex items-center p-2 rounded w-max bg-sidebar">
      <MdSearch />

      <input
        type="text"
        className="px-2 bg-transparent border-none outline-none text-gray-200"
        placeholder="Search for a user..."
      />
    </div>
  );
};

export default Search;
