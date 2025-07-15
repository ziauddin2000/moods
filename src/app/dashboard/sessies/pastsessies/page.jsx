"use client";
import { useState, useRef, useEffect } from "react";
import List from "./_components/List";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import SideLink from "../_components/SideLink";
import { Badge } from "@/components/ui/badge";

// --- Dummy Data ---
const sessionData = [
  {
    name: "John Doe",
    role: "Counselor",
    date: "17 June 2025 12:10",
    duration: "1:00:00",
  },
  {
    name: "Jane Smith",
    role: "Psychologist",
    date: "18 June 2025 13:15",
    duration: "1:30:00",
  },
  {
    name: "Michael Johnson",
    role: "Therapist",
    date: "19 June 2025 14:20",
    duration: "2:00:00",
  },
  {
    name: "Sarah Williams",
    role: "Psychiatrist",
    date: "20 June 2025 15:25",
    duration: "1:45:00",
  },
  {
    name: "David Brown",
    role: "Counselor",
    date: "21 June 2025 16:30",
    duration: "1:10:00",
  },
  {
    name: "Emily Davis",
    role: "Psychologist",
    date: "22 June 2025 17:35",
    duration: "2:20:00",
  },
  {
    name: "James Miller",
    role: "Therapist",
    date: "23 June 2025 18:40",
    duration: "1:50:00",
  },
  {
    name: "Olivia Wilson",
    role: "Psychiatrist",
    date: "24 June 2025 19:45",
    duration: "2:10:00",
  },
  {
    name: "Ethan Clark",
    role: "Counselor",
    date: "25 June 2025 20:50",
    duration: "1:30:00",
  },
  {
    name: "Sophia Harris",
    role: "Psychologist",
    date: "26 June 2025 21:55",
    duration: "1:20:00",
  },
  {
    name: "William Turner",
    role: "Therapist",
    date: "27 June 2025 22:00",
    duration: "2:00:00",
  },
  {
    name: "Ava Martin",
    role: "Psychiatrist",
    date: "28 June 2025 23:05",
    duration: "1:45:00",
  },
  {
    name: "Daniel Lee",
    role: "Counselor",
    date: "29 June 2025 00:10",
    duration: "1:10:00",
  },
  {
    name: "Chloe Lewis",
    role: "Psychologist",
    date: "30 June 2025 01:15",
    duration: "1:30:00",
  },
  {
    name: "Samuel King",
    role: "Therapist",
    date: "1 July 2025 02:20",
    duration: "2:00:00",
  },
  {
    name: "Lily Scott",
    role: "Psychiatrist",
    date: "2 July 2025 03:25",
    duration: "1:50:00",
  },
  {
    name: "Benjamin Walker",
    role: "Counselor",
    date: "3 July 2025 04:30",
    duration: "2:10:00",
  },
  {
    name: "Mia Green",
    role: "Psychologist",
    date: "4 July 2025 05:35",
    duration: "1:15:00",
  },
  {
    name: "Lucas Hall",
    role: "Therapist",
    date: "5 July 2025 06:40",
    duration: "1:25:00",
  },
  {
    name: "Amelia Adams",
    role: "Psychiatrist",
    date: "6 July 2025 07:45",
    duration: "2:00:00",
  },
  {
    name: "Oliver Young",
    role: "Counselor",
    date: "7 July 2025 08:50",
    duration: "1:50:00",
  },
  {
    name: "Isabella Rodriguez",
    role: "Psychologist",
    date: "8 July 2025 09:55",
    duration: "1:30:00",
  },
  {
    name: "Elijah Martinez",
    role: "Therapist",
    date: "9 July 2025 10:00",
    duration: "1:40:00",
  },
  {
    name: "Charlotte Perez",
    role: "Psychiatrist",
    date: "10 July 2025 11:05",
    duration: "2:10:00",
  },
  {
    name: "Henry Thompson",
    role: "Counselor",
    date: "11 July 2025 12:10",
    duration: "1:20:00",
  },
  {
    name: "Amelia Johnson",
    role: "Psychologist",
    date: "12 July 2025 13:15",
    duration: "1:30:00",
  },
  {
    name: "Sebastian Anderson",
    role: "Therapist",
    date: "13 July 2025 14:20",
    duration: "2:00:00",
  },
  {
    name: "Harper Taylor",
    role: "Psychiatrist",
    date: "14 July 2025 15:25",
    duration: "1:45:00",
  },
  {
    name: "Jack Martinez",
    role: "Counselor",
    date: "15 July 2025 16:30",
    duration: "1:10:00",
  },
  {
    name: "Grace White",
    role: "Psychologist",
    date: "16 July 2025 17:35",
    duration: "1:20:00",
  },
  {
    name: "Matthew Harris",
    role: "Therapist",
    date: "17 July 2025 18:40",
    duration: "2:00:00",
  },
  {
    name: "Zoe Nelson",
    role: "Psychiatrist",
    date: "18 July 2025 19:45",
    duration: "2:10:00",
  },
  {
    name: "Jackson Moore",
    role: "Counselor",
    date: "19 July 2025 20:50",
    duration: "1:30:00",
  },
  {
    name: "Madeline King",
    role: "Psychologist",
    date: "20 July 2025 21:55",
    duration: "1:30:00",
  },
];

const PAGE_SIZE = 17;

function Pagination({ page, pageCount, onPageChange }) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 items-center justify-between bg-green3 rounded-md px-4 py-2 w-full">
      <span className="text-primary-beige text-sm pl-2">
        Pagina {page} van {pageCount}
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="rounded text-primary-beige cursor-pointer text-base w-7 h-7 flex justify-center items-center disabled:opacity-40"
        >
          <FaAngleLeft />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer ${
              p === page
                ? "bg-green1 text-primary-beige"
                : "bg-transparent text-primary-beige hover:bg-green1"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === pageCount}
          className="rounded text-primary-beige cursor-pointer text-base w-7 h-7 flex justify-center items-center disabled:opacity-40"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default function PastSessies() {
  const [page, setPage] = useState(1);

  // --- Dropdown Search State ---
  const [selectedSession, setSelectedSession] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  // Get unique session names
  const uniqueSessions = Array.from(new Set(sessionData.map((s) => s.name)));

  // Filter uniqueSessions by search input
  const filteredUniqueSessions = uniqueSessions.filter((sessionName) =>
    sessionName.toLowerCase().includes(search.toLowerCase())
  );

  // Filter sessionData by selected session name
  const filteredSessions = selectedSession
    ? sessionData.filter((s) => s.name === selectedSession)
    : sessionData;

  const paginatedRooms = filteredSessions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  // Clear filter function
  const handleClear = () => {
    setSelectedSession(null);
    setPage(1);
    setSearch("");
  };

  // Focus input when dropdown opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open, search]);

  return (
    <div className="py-5 lg:py-10 grid grid-cols-1 gap-y-3 lg:gap-0 lg:grid-cols-12 ">
      {/* Left */}
      <div className="lg:col-span-4 xl:col-span-3">
        <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl lg:rounded-none lg:rounded-tl-xl lg:rounded-bl-xl p-5 xl:p-10 lg:h-full w-full">
          {/* Left Menu */}
          <SideLink />
          {/* Find a session */}
          <div className="mt-15 lg:mt-25">
            <h2 className="font-medium text-lg text-primary-beige mb-4 flex items-center gap-1 justify-between">
              <span>Vind een kamer</span>
              <Badge
                className="cursor-pointer text-xs text-primary-beige"
                variant="default"
                onClick={handleClear}
              >
                Clear
              </Badge>
            </h2>

            {/* Session Dropdown with search */}
            <Select
              value={selectedSession || ""}
              onValueChange={(value) => {
                setSelectedSession(value);
                setPage(1);
                setOpen(false);
              }}
              open={open}
              onOpenChange={(isOpen) => {
                setOpen(isOpen);
                if (!isOpen) setSearch("");
              }}
            >
              <SelectTrigger className="agenda-dropdown w-full cursor-pointer rounded-3xl shadow-none border-primary-beige text-base py-5">
                <SelectValue placeholder="Selecteer een kamer" />
              </SelectTrigger>
              <SelectContent className="bg-linear-to-r from-green3 to to-green3 border border-secondary-beige max-h-[300px] overflow-y-auto">
                <div
                  className="px-2 py-2"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    ref={inputRef}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Zoek kamer..."
                    className="w-full px-2 py-1 rounded border border-primary-beige bg-transparent text-primary-beige"
                    onFocus={(e) => e.stopPropagation()}
                    autoFocus
                  />
                </div>
                {filteredUniqueSessions.length > 0 ? (
                  filteredUniqueSessions.map((sessionName) => (
                    <SelectItem
                      key={sessionName}
                      value={sessionName}
                      className={`text-primary-beige ${
                        selectedSession === sessionName
                          ? "bg-primary-beige text-rich-black"
                          : ""
                      }`}
                    >
                      {sessionName}
                    </SelectItem>
                  ))
                ) : (
                  <div className="px-2 py-2 text-primary-beige">
                    Geen resultaten
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="lg:col-span-8 xl:col-span-9">
        <div className="bg-linear-to-bl from-[#5C7E6C] to-[#0C221B] rounded-xl lg:rounded-none lg:rounded-tr-xl lg:rounded-br-xl p-5 lg:h-full w-full">
          <div className="flex flex-col justify-between h-[84vh]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-secondary-beige">
              <h1 className="text-xl md:text-2xl text-primary-beige font-medium">
                Afgelopen sessies
              </h1>
            </div>

            {/* List */}
            <div className="flex-1 rooms-card-wrapper h-[80%] overflow-y-auto">
              <List paginatedRooms={paginatedRooms} />
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <Pagination
                page={page}
                pageCount={Math.ceil(filteredSessions.length / PAGE_SIZE)}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
