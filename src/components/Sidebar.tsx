"use client";
import { MdLogout } from "react-icons/md";
import sidebar from "@/constants/sidebar";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="sticky top-[20px]">
      <div className="flex items-center gap-4 mb-6">
        <Image
          width="50"
          height="50"
          alt="userImage"
          src="/user/avatar.png"
          className="rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span>Alex</span>
          <span className="text-sm text-slate-500">Administrator</span>
        </div>
      </div>

      <ul>
        {sidebar.map((catObj) => (
          <li key={catObj.title} className="mb-6">
            <span className="text-xl font-bold text-gray-400">
              {catObj.title}
            </span>

            {catObj.list.map((linkObj) => (
              <SidebarLink linkObj={linkObj} key={linkObj.path} />
            ))}
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-3 bg-slate-600 px-4 py-2 rounded-md fixed bottom-5 hover:bg-red-300 duration-150 hover:text-gray-800">
        <span className="rotate-180">
          <MdLogout />
        </span>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
