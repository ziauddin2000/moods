import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import TopRightIcon from "../../../../../public/icons/TopRightIcon";

export default function RoomList({ paginatedRooms }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-primary-beige text-sm font-normal">
          <TableCell>NAAM</TableCell>
          <TableCell className="text-center">FUNCTIE</TableCell>
          <TableCell className="text-center">ROOM URL</TableCell>
          <TableCell className="text-center">KAMER</TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody className="text-primary-beige text-sm font-normal">
        {paginatedRooms.map((room, i) => (
          <TableRow key={i}>
            <TableCell>{room.name}</TableCell>
            <TableCell className="text-center">{room.role}</TableCell>
            <TableCell className="text-center">
              <a
                href={room.url}
                target="_blank"
                className="text-primary-beige underline"
              >
                {room.url}
              </a>
            </TableCell>
            <TableCell className="text-center">
              <button>
                <Link
                  href={room.url}
                  className="px-3 py-1 rounded-full bg-green5"
                  target="_blank"
                >
                  Naar de kamer
                </Link>
              </button>
            </TableCell>
            <TableCell className="text-right">
              <Link href={room.url} target="_blank">
                <TopRightIcon></TopRightIcon>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
