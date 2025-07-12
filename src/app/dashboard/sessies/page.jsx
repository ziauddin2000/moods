"use client";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ListIcon from "../../../../public/icons/ListIcon";
import TilesIcon from "../../../../public/icons/TilesIcon";
import Card from "./_components/Card";
import RoomList from "./_components/RoomList";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

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

// ---  Pagination  ---
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

  const paginatedRooms = rooms.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
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
              <TilesIcon></TilesIcon>
              Tegels
            </SelectItem>
            <SelectItem value="Lijst" className="text-primary-beige">
              <ListIcon></ListIcon>
              Lijst
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* List */}
      <div className="flex-1 rooms-card-wrapper h-[80%] overflow-y-auto">
        {view === "Lijst" ? (
          <RoomList paginatedRooms={paginatedRooms}></RoomList>
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
          pageCount={Math.ceil(rooms.length / PAGE_SIZE)}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
