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
    <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl p-5 h-full">
      <div className="relative h-full">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
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
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-1/2 text-center text-primary-beige">
          <span className="text-4xl 2xl:text-5xl font-bold">95</span> <br />{" "}
          <span className="text-lg font-medium">cliënten</span>
        </h1>
      </div>
    </div>
  );
}
