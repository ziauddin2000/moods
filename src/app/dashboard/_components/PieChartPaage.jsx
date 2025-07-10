"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function PieChartPage() {
  const data = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 },
    { name: "Group C", value: 1200 },
  ];

  const COLORS = ["#6CB791", "#487A60", "#305140"];

  return (
    <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl p-5">
      <div className="relative">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <h1 className="absolute top-1/2 left-1/2 -translate-1/2 text-center text-primary-beige">
          <span className="text-5xl font-bold">95</span> <br />{" "}
          <span className="text-lg font-medium">cliënten</span>
        </h1>
      </div>
    </div>
  );
}
