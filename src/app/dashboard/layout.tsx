import TopNavbar from "@/components/TopNavbar";
import Sidebar from "@/components/Sidebar";
import { ChildrenType } from "@/types";

const DashboardLayout = ({ children }: ChildrenType) => {
  return (
    <div className="flex">
      <div className="flex-1 p-4 min-h-screen bg-sidebar select-none">
        <Sidebar />
      </div>

      <div className="flex-[5] p-4">
        <TopNavbar />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;