import Link from "next/link";
import DotsIcon from "../../../../../public/icons/DotsIcon";
import TopRightIcon from "../../../../../public/icons/TopRightIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileCircle from "../../../../../public/icons/ProfileCircle";

export default function Card({ room }) {
  return (
    <Link
      target="_blank"
      href={room.url}
      className="flex flex-col items-center p-4 border-[0.5] border-secondary-beige rounded-[14px] relative hover:bg-[#37815b5e]"
    >
      <img
        src={room.image}
        alt={room.name}
        className="w-35 h-35 rounded-full mb-3"
      />
      <div className="font-medium text-lg text-primary-beige">{room.name}</div>
      <div className="text-base text-secondary-beige">{room.role}</div>

      <div className="absolute top-2 left-4 h-[30px] w-[30px] flex items-center justify-center card-dot-wrapper">
        <DropdownMenu>
          <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}>
            <DotsIcon></DotsIcon>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onClick={(e) => e.stopPropagation()}
            className="bg-green1 border-0 text-primary-beige"
            side="bottom"
            align="start"
            sideOffset={0}
            alignOffset={-10}
          >
            <DropdownMenuLabel>
              <Link
                target="_blank"
                href={room.url}
                className="flex items-center gap-2 text-sm text-primary-beige"
              >
                <ProfileCircle></ProfileCircle>
                <span>Profiel bekijken</span>
              </Link>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <TopRightIcon className="absolute top-4 right-4"></TopRightIcon>
    </Link>
  );
}
