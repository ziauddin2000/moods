"use client";

import React, { PureComponent } from "react";
import ResultChart from "./_components/ResultChart";
import ClientFlow from "./_components/ClientFlow";
import PieChartPage from "./_components/PieChartPaage";
import Image from "next/image";
import BillChart from "./_components/BillChart";
import HomeCalendar from "./_components/HomeCalendar";

export default function Dashboard() {
  const data = [
    {
      name: "jun",
      price: "600",
    },
    {
      name: "jul",
      price: "600",
    },
    {
      name: "aug",
      price: "300",
    },
    {
      name: "sep",
      price: "500",
    },
    {
      name: "oct",
      price: "800",
    },
    {
      name: "nov",
      price: "500",
    },
    {
      name: "dec",
      price: "300",
    },
    {
      name: "jan",
      price: "800",
    },
  ];

  return (
    // Dashbaord Page
    <div className="py-10 grid grid-cols-12 gap-5">
      {/* Left Chart */}
      <div className="col-span-4">
        <ResultChart data={data}></ResultChart>
      </div>
      {/* Middle Chart */}
      <div className="col-span-6">
        {/* Chart Grid */}
        <div className="grid grid-cols-12 gap-2 mb-5">
          <div className="col-span-8">
            {/* Calendar */}
            <HomeCalendar></HomeCalendar>
          </div>
          <div className="col-span-4">
            {/* Pie Chart */}
            <PieChartPage></PieChartPage>
          </div>
        </div>
        {/* Client Flow Chart */}
        <ClientFlow></ClientFlow>
      </div>
      {/* Right Chart */}
      <div className="col-span-2 flex flex-col justify-between">
        {/* session start */}
        <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl p-5">
          <div className="flex justify-end">
            <Image
              src="/icons/arrow-top-right.svg"
              width={80}
              height={80}
              alt="Arrow Top Right"
            ></Image>
          </div>
          <h3 className="mt-10 text-xl font-medium text-primary-beige">
            start sessie
          </h3>
        </div>
        {/* Bill Chart */}
        <BillChart></BillChart>
      </div>
    </div>
  );
}
