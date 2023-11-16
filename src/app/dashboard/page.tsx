import Transactions from "@/components/Transactions";
import RightBar from "@/components/RightBar";
import Chart from "@/components/Chart";
import Card from "@/components/Card";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-[3] flex flex-col gap-4">
        <div className="flex items-center gap-4 justify-between">
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions />

        <Chart />
      </div>

      <div className="flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
