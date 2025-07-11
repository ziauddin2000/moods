"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function AgendaCalendar() {
  const [date, setDate] = useState(new Date());

  // Safe date selection handler
  const handleDateSelect = (selectedDate) => {
    if (selectedDate && selectedDate instanceof Date && !isNaN(selectedDate)) {
      setDate(selectedDate);
    }
  };

  return (
    <div className="home-calendar max-w-[500px] w-full mx-auto">
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-lg bg-transparent text-primary-beige  w-full mx-auto"
        classNames={{
          day: "relative w-full h-full p-0 text-center select-none text-xs ",
          week: "flex w-full mt-0.5",
          weekdays: "flex w-full",
          weekday:
            "flex-1 text-center text-[10px] font-normal text-primary-beige/70",
          month: "flex flex-col w-full gap-2",
        }}
      />
    </div>
  );
}
