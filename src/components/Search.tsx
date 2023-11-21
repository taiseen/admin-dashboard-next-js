"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSearchQuery = e.target.value;

    const urlParam = new URLSearchParams(searchParam);

    userSearchQuery
      ? userSearchQuery.length > 2 && urlParam.set("q", userSearchQuery)
      : urlParam.delete("q");

    router.replace(`${pathName}?${urlParam}`); // update browser url
  };

  return (
    <div className="flex items-center p-2 rounded w-max bg-sidebar">
      <MdSearch />

      <input
        type="text"
        className="px-2 bg-transparent border-none outline-none text-gray-200"
        placeholder="Search for a user..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
