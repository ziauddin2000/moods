import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const data = [
  { name: "jan", price: "510", type: "Week" },
  { name: "jan", price: "2050", type: "Maand" },
  { name: "jan", price: "600", type: "Jaar" },

  { name: "feb", price: "1530", type: "Week" },
  { name: "feb", price: "1650", type: "Maand" },
  { name: "feb", price: "750", type: "Jaar" },

  { name: "mar", price: "840", type: "Week" },
  { name: "mar", price: "1250", type: "Maand" },
  { name: "mar", price: "1200", type: "Jaar" },

  { name: "apr", price: "760", type: "Week" },
  { name: "apr", price: "1350", type: "Maand" },
  { name: "apr", price: "800", type: "Jaar" },

  { name: "may", price: "590", type: "Week" },
  { name: "may", price: "850", type: "Maand" },
  { name: "may", price: "700", type: "Jaar" },

  { name: "jun", price: "670", type: "Week" },
  { name: "jun", price: "950", type: "Maand" },
  { name: "jun", price: "1300", type: "Jaar" },

  { name: "jul", price: "820", type: "Week" },
  { name: "jul", price: "1150", type: "Maand" },
  { name: "jul", price: "1600", type: "Jaar" },

  { name: "aug", price: "1240", type: "Week" },
  { name: "aug", price: "1650", type: "Maand" },
  { name: "aug", price: "1200", type: "Jaar" },

  { name: "sep", price: "660", type: "Week" },
  { name: "sep", price: "1550", type: "Maand" },
  { name: "sep", price: "1900", type: "Jaar" },

  { name: "oct", price: "780", type: "Week" },
  { name: "oct", price: "2150", type: "Maand" },
  { name: "oct", price: "1100", type: "Jaar" },

  { name: "nov", price: "920", type: "Week" },
  { name: "nov", price: "1250", type: "Maand" },
  { name: "nov", price: "1600", type: "Jaar" },

  { name: "dec", price: "1020", type: "Week" },
  { name: "dec", price: "1150", type: "Maand" },
  { name: "dec", price: "800", type: "Jaar" },
];

const FILTERS = ["Week", "Maand", "Jaar"];

export default function ResultChart() {
  const [selectedType, setSelectedType] = useState("Jaar");

  // Filter data based on selected type
  const filteredData = data.filter((item) => item.type === selectedType);

  return (
    <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl p-5 sm:p-8 h-full">
      <h1 className="text-primary-beige text-2xl font-medium mb-4">
        Resultaten
      </h1>

      {/* Filter */}
      <div className="flex items-center justify-end border-b border-secondary-beige">
        {FILTERS.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`cursor-pointer text-base px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-white font-medium transition-colors ${
              selectedType === type ? "bg-green3" : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-6 h-[250px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={filteredData}
            margin={{
              top: 0,
              right: 0,
              left: -15,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#f6ece2" />
            <YAxis stroke="#f6ece2" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#305140"
              fill="#6CB791"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Content */}
      <h1 className="text-primary-beige text-2xl font-medium my-4 pb-2 border-b border-secondary-beige">
        Verkoopinformatie
      </h1>

      <Table className="mt-2 text-primary-beige text-base font-medium">
        <TableBody>
          <TableRow>
            <TableCell>Vorige week</TableCell>
            <TableCell>(19-05 t/m 25-05-2025)</TableCell>
            <TableCell>€ 154.677,23</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Huidige week</TableCell>
            <TableCell>(19-05 t/m 25-05-2025)</TableCell>
            <TableCell>€ 154.677,23</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Volgende week</TableCell>
            <TableCell>(19-05 t/m 25-05-2025)</TableCell>
            <TableCell>€ 154.677,23</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Vorige maand</TableCell>
            <TableCell>(19-05 t/m 25-05-2025)</TableCell>
            <TableCell>€ 154.677,23</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Last update data */}
      <p className="flex flex-wrap gap-10 text-primary-beige text-base font-medium mt-6 pt-3 border-t border-secondary-beige">
        <span>Laatste update</span>
        <span>29 mei 2025 om 11:03 a.m.</span>
      </p>
    </div>
  );
}
