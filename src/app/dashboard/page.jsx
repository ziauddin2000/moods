"use client";

import React, { PureComponent } from "react";
import ResultChart from "./_components/ResultChart";
import ClientFlow from "./_components/ClientFlow";
import PieChartPage from "./_components/PieChartPaage";
import Image from "next/image";
import BillChart from "./_components/BillChart";
import HomeCalendar from "./_components/HomeCalendar";

export default function Dashboard() {
  

  return (
    // Dashbaord Page
    <div className="py-10 grid grid-cols-1 xl:grid-cols-12 gap-3">
      {/* Left Chart */}
      <div className="w-full xl:col-span-4">
        <ResultChart ></ResultChart>
      </div>
      {/* Middle Chart */}
      <div className="xl:col-span-6">
        {/* Chart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-5">
          <div className="md:col-span-8 h-full">
            {/* Calendar */}
            <HomeCalendar></HomeCalendar>
          </div>
          <div className="md:col-span-4">
            {/* Pie Chart */}
            <PieChartPage></PieChartPage>
          </div>
        </div>
        {/* Client Flow Chart */}
        <ClientFlow></ClientFlow>
      </div>
      {/* Right Chart */}
      <div className="xl:col-span-2 flex flex-col md:flex-row xl:flex-col gap-5 justify-between">
        {/* session start */}
        <div className="md:w-[50%] md:h-fit xl:w-full bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl p-5">
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
        <div className="md:w-[50%] xl:w-full xl:h-full">
          <BillChart></BillChart>
        </div>
      </div>
    </div>
  );
}
