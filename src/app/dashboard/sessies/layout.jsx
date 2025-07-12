import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function layout({ children }) {
  // Left Menu
  let leftMenu = [
    {
      label: "Nieuwe sessie",
      route: "nieuwe-sessie",
    },
    {
      label: "Vorige sessies",
      route: "vorige-sessies",
    },
    {
      label: "Rooms",
      route: "rooms",
    },
  ];
  return (
    <div className="py-10 grid grid-cols-1 gap-y-3 lg:gap-0 lg:grid-cols-12 ">
      {/* Left */}
      <div className="lg:col-span-4 xl:col-span-3">
        <div className="bg-linear-to-bl from-[#0C221B] to-[#5C7E6C] rounded-xl lg:rounded-none lg:rounded-tl-xl lg:rounded-bl-xl p-5 xl:p-10 lg:h-full w-full">
          {/* Left Menu */}
          <div>
            {leftMenu.map((item, idx) => (
              <Link
                key={idx}
                href="/dashboard/sessies"
                className="block py-4 text-primary-beige text-base font-medium border-b border-primary-beige hover:bg-[#37815b45] px-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Find a room */}
          <div className="mt-15 lg:mt-25">
            <h2 className="font-medium text-lg text-primary-beige mb-4">
              Vind een kamer
            </h2>
            <Select>
              <SelectTrigger className="agenda-dropdown w-full cursor-pointer rounded-3xl shadow-none border-primary-beige text-base py-5">
                <SelectValue placeholder="Selecteer een therapeut" />
              </SelectTrigger>
              <SelectContent className="bg-linear-to-r from-green3 to to-green3 border border-secondary-beige">
                <SelectItem value="light" className="text-primary-beige">
                  Lars Vermeer
                </SelectItem>
                <SelectItem value="dark" className="text-primary-beige">
                  Sanne Blom
                </SelectItem>
                <SelectItem value="system" className="text-primary-beige">
                  Tijn van de Velde
                </SelectItem>
                <SelectItem value="system" className="text-primary-beige">
                  Femke Meulendijk
                </SelectItem>
                <SelectItem value="system" className="text-primary-beige">
                  Daan Hoogstra
                </SelectItem>
                <SelectItem value="system" className="text-primary-beige">
                  Noa Zegers
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="lg:col-span-8 xl:col-span-9">
        <div className="bg-linear-to-bl from-[#5C7E6C] to-[#0C221B] rounded-xl lg:rounded-none lg:rounded-tr-xl lg:rounded-br-xl p-5 lg:h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
