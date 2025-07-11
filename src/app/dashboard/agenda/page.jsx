"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import AgendaCalendar from "./_components/AgendaCalendar";
import Profile from "./_components/Profile";

export default function Agenda() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // Open popup on date click
  const handleDateClick = (info) => {
    console.log("Button Clicked");
    setSelectedDate(info.dateStr);
    setIsPopupOpen(true);
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="py-10 grid grid-cols-1 gap-y-3 lg:gap-0 lg:grid-cols-12">
      {/* Left */}
      <div className="lg:col-span-4 xl:col-span-3">
        <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl lg:rounded-none lg:rounded-tl-xl lg:rounded-bl-xl p-5 xl:p-10">
          {/* Agenda Calendar */}
          <AgendaCalendar></AgendaCalendar>
          {/* Profile */}
          <Profile></Profile>
        </div>
      </div>

      {/* Right */}
      <div className="lg:col-span-8 xl:col-span-9">
        <div className="bg-linear-to-bl from-[#5C7E6C] to-[#0C221B] rounded-xl lg:rounded-none lg:rounded-tr-xl lg:rounded-br-xl p-5 full-calendar-wrapper h-[500px] lg:h-full w-full">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "today,prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listWeek",
            }}
            height="100%"
            width="100%"
            dateClick={(info) => alert("Clicked: " + info.dateStr)}
          />
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-1/3">
            <h3 className="text-xl font-semibold mb-4">
              Add Event on {selectedDate}
            </h3>
            {/* Add your event form here */}
            <input
              type="text"
              placeholder="Event title"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Event description"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={closePopup} // Close the popup
            >
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              // Later on, you will handle database save here
            >
              Save Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
