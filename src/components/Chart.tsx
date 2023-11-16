"use client"; // without this, chat wont be render, throw error...
// Error: Object prototype may only be an Object or null: undefined

import chartData from "@/constants/chartData";
import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Legend,
  YAxis,
  XAxis,
  Line,
} from "recharts";

const Chart = () => {
  return (
    <div className="p-5 bg-slate-800 rounded h-[450px]">
      <h2 className="mb-4 text-gray-300">Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />

          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />

          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
