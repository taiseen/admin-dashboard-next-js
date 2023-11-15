import { usePathname } from "next/navigation";
import { LinkObjType } from "@/types";
import Link from "next/link";

const SidebarLink = ({ linkObj }: { linkObj: LinkObjType }) => {
  const pathName = usePathname();

  const { path, title, icon } = linkObj;

  // if by this way not render icon,
  // then next js throw error...
  const LinkIcon = icon;

  return (
    <Link
      href={path}
      className={`flex items-center gap-2 ml-4 px-2 py-3 my-2 rounded-md cursor-pointer transition-all duration-100 hover:bg-slate-600 hover:text-orange-400 group 
      ${pathName === path ? "bg-slate-500 text-gray-100" : "bg-slate-700 text-gray-400"}`}
    >
      <LinkIcon className="w-6 h-6 group-hover:text-orange-400 transition-all duration-100 " />

      <span className="text-lg">{title}</span>
    </Link>
  );
};

export default SidebarLink;
