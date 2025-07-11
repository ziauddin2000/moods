import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function ResultChart({ data }) {
  return (
    <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl p-5 sm:p-8 h-full">
      <h1 className="text-primary-beige text-2xl font-medium mb-4">
        Resultaten
      </h1>

      {/* Filter */}
      <div className="flex items-center justify-end border-b border-secondary-beige">
        <button className="cursor-pointer text-base px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-white font-medium">
          Week
        </button>
        <button className="cursor-pointer text-base px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-white font-medium">
          Maand
        </button>
        <button className="cursor-pointer text-base px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-white font-medium bg-green3">
          Jaar
        </button>
      </div>

      {/* Chart */}
      <div className="mt-6 h-[250px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -20,
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
