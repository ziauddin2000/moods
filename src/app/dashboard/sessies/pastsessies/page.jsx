"use client";
import { useState } from "react";

import List from "./_components/List";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

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

// ---  Pagination  ---
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

  const paginatedRooms = sessionData.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="flex flex-col justify-between h-[84vh]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-secondary-beige">
        <h1 className="text-xl md:text-2xl text-primary-beige font-medium">
          Afgelopen sessies
        </h1>
      </div>

      {/* List */}
      <div className="flex-1 rooms-card-wrapper h-[80%] overflow-y-auto">
        <List paginatedRooms={paginatedRooms}></List>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          page={page}
          pageCount={Math.ceil(sessionData.length / PAGE_SIZE)}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
