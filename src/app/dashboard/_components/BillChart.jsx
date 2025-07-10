"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BillChart() {
  const data = [
    {
      name: "Vorige Week",
      data1: 1200,
      data2: 600,
    },
    {
      name: "Huidige week",
      data1: 1200,
      data2: 500,
    },
    {
      name: "Volgende Week",
      data1: 1200,
      data2: 400,
    },
  ];

  return (
    <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl p-5">
      <h1 className="text-primary-beige text-center text-2xl font-medium mb-4">
        Declarabiliteit
      </h1>

      <div className="mt-10">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#f6ece2" />
            <Tooltip />
            <Bar dataKey="data1" stackId="a" fill="#487A60" />
            <Bar dataKey="data2" stackId="a" fill="#6CB791" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-primary-beige font-medium">
              <span className="text-base font-semibold">Vorige week </span>
              <br />
              <span className="text-sm">TARGET: 90%</span>
            </TableCell>
            <TableCell className=" text-right">
              <span className="text-xl font-bold text-white">81%</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-primary-beige font-medium">
              <span className="text-base font-semibold">Vorige week </span>
              <br />
              <span className="text-sm">TARGET: 90%</span>
            </TableCell>
            <TableCell className=" text-right">
              <span className="text-xl font-bold text-white">81%</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-primary-beige font-medium">
              <span className="text-base font-semibold">Vorige week </span>
              <br />
              <span className="text-sm">TARGET: 90%</span>
            </TableCell>
            <TableCell className=" text-right">
              <span className="text-xl font-bold text-white">81%</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
