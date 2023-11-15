"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const TopNavbar = () => {
  const pathName = usePathname();

  return (
    <nav className="p-4 rounded bg-sidebar flex items-center justify-between select-none">
      <p className="text-lg capitalize">{pathName.split("/").pop()}</p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-input rounded px-2">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="py-1 text-gray-300 outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <MdPublic size={20} />
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
