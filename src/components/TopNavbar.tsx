"use client";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const TopNavbar = () => {
  const isScrolling = useScroll();
  const pathName = usePathname();

  const rgxProduct = /\/products\/(\w+)/;
  const rgxUser = /\/users\/(\w+)/;

  const urlLastWord = pathName.split("/").pop();

  const sectionName = pathName.includes("products/add")
    ? "Add New Product"
    : pathName.includes("users/add")
    ? "Add New User"
    : pathName.match(rgxProduct)
    ? `Product id - ${urlLastWord}`
    : pathName.match(rgxUser)
    ? `User id - ${urlLastWord}`
    : urlLastWord;

  // not work ==> fixed w-[calc(100%-360px)]
  // working  ==> sticky top-4

  return (
    <nav
      className={`p-4 rounded bg-sidebar flex items-center justify-between select-none sticky top-4 duration-200 
      ${isScrolling ? "bg-[rgba(152,147,147,0.1)] backdrop-blur-md" : ""}`}
    >
      <p className="text-lg capitalize">{sectionName}</p>

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
