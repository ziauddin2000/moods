"use client";
import { useState, useRef, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import SideLink from "./_components/SideLink";

import ListIcon from "../../../../public/icons/ListIcon";
import TilesIcon from "../../../../public/icons/TilesIcon";
import Card from "./_components/Card";
import RoomList from "./_components/RoomList";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

// --- Dummy Data ---
const rooms = [
  {
    name: "John Doe",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Jane Smith",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "Michael Johnson",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Sarah Williams",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "David Brown",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Emily Davis",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "James Miller",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Olivia Wilson",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "Ethan Clark",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Sophia Harris",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "William Turner",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Ava Martin",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "Daniel Lee",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Chloe Lewis",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "Samuel King",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Lily Scott",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "Benjamin Walker",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Mia Green",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "Lucas Hall",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Amelia Adams",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "Oliver Young",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Isabella Rodriguez",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "Elijah Martinez",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Charlotte Perez",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "Henry Thompson",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Amelia Johnson",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "Sebastian Anderson",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Harper Taylor",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "Jack Martinez",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Grace White",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
  {
    name: "Matthew Harris",
    role: "Therapist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-3.png",
  },
  {
    name: "Zoe Nelson",
    role: "Psychiatrist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-4.png",
  },
  {
    name: "Jackson Moore",
    role: "Counselor",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-1.png",
  },
  {
    name: "Madeline King",
    role: "Psychologist",
    url: "https://d8das.whereby.com/therapeutformee",
    image: "/images/user-2.png",
  },
];

const PAGE_SIZE = 12;

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

export default function Sessies() {
  const [view, setView] = useState("Tegels");
  const [page, setPage] = useState(1);

  // --- Room Filter State ---
  const [selectedRoom, setSelectedRoom] = useState(null);

  // --- Dropdown Search State ---
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  // Get unique room names from rooms
  const uniqueRooms = Array.from(new Set(rooms.map((room) => room.name)));

  // Filter uniqueRooms by search input
  const filteredUniqueRooms = uniqueRooms.filter((roomName) =>
    roomName.toLowerCase().includes(search.toLowerCase())
  );

  // Filter rooms by selected room name
  const filteredRooms = selectedRoom
    ? rooms.filter((room) => room.name === selectedRoom)
    : rooms;

  const paginatedRooms = filteredRooms.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  // Clear filter function
  const handleClear = () => {
    setSelectedRoom(null);
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
          {/* Find a room */}
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

            {/* Room Dropdown with search */}
            <Select
              value={selectedRoom || ""}
              onValueChange={(value) => {
                setSelectedRoom(value);
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
              <SelectContent className="bg-linear-to-r from-green3 to to-green3 border border-secondary-beige max-h-[300px] overflow-y-auto relative">
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
                {filteredUniqueRooms.length > 0 ? (
                  filteredUniqueRooms.map((roomName) => (
                    <SelectItem
                      key={roomName}
                      value={roomName}
                      className={`text-primary-beige ${
                        selectedRoom === roomName
                          ? "bg-primary-beige text-rich-black"
                          : ""
                      }`}
                    >
                      {roomName}
                    </SelectItem>
                  ))
                ) : (
                  <div className="px-2 py-2 text-primary-beige">
                    Geen resultaten
                  </div>
                )}
                <div className="h-12" />
                <button
                  onClick={handleClear}
                  className="fixed bottom-[4px] left-[60%] -translate-x-1/2 text-sm font-medium  bg-green1 py-2 px-2 text-primary-beige rounded cursor-pointer"
                >
                  <RxCross2 />
                </button>
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
                Rooms
              </h1>
              <Select value={view} onValueChange={setView}>
                <SelectTrigger className="agenda-dropdown cursor-pointer rounded-sm shadow-none border-0 text-base py-2 w-fit">
                  <SelectValue placeholder="Tegels" />
                </SelectTrigger>
                <SelectContent className="bg-linear-to-r from-green3 to to-green3 border border-secondary-beige">
                  <SelectItem value="Tegels" className="text-primary-beige">
                    <TilesIcon />
                    Tegels
                  </SelectItem>
                  <SelectItem value="Lijst" className="text-primary-beige">
                    <ListIcon />
                    Lijst
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* List */}
            <div className="flex-1 rooms-card-wrapper h-[80%] overflow-y-auto">
              {view === "Lijst" ? (
                <RoomList paginatedRooms={paginatedRooms} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {paginatedRooms.map((room, i) => (
                    <Card key={i} room={room} />
                  ))}
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <Pagination
                page={page}
                pageCount={Math.ceil(filteredRooms.length / PAGE_SIZE)}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
