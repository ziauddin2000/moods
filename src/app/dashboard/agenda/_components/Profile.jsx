import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Profile() {
  return (
    <div className="pt-10 space-y-12  max-w-[500px] w-full mx-auto">
      {/* Profile Avatar */}
      <div className="space-y-4">
        {/* Profile  */}
        <div className="flex items-center gap-3">
          <div>
            <Image
              src="/images/profile.svg"
              alt="Profile"
              width={70}
              height={70}
              className="rounded-full"
            ></Image>
          </div>
          <div>
            <h2 className="text-primary-beige font-medium text-xl leading-[1.3]">
              Anna Lisa
            </h2>
            <h2 className="text-primary-beige font-medium text-lg leading-[1.3]">
              Therapeut
            </h2>
          </div>
        </div>
        {/* Booking Button */}
        <button className="button-gr">Boek afspraak</button>
      </div>
      {/* Select Agenda */}
      <div className="space-y-4">
        <h2 className="font-medium text-lg text-primary-beige mb-4">
          Vind een agenda
        </h2>

        {/* select a therapist */}
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

        {/* select a client */}
        <Select>
          <SelectTrigger className="agenda-dropdown w-full cursor-pointer rounded-3xl shadow-none border-primary-beige text-base py-5">
            <SelectValue placeholder="Selecteer een cliënt" />
          </SelectTrigger>
          <SelectContent className="bg-linear-to-r from-green3 to to-green3 border border-secondary-beige">
            <SelectItem value="Client 1" className="text-primary-beige">
              Client 1
            </SelectItem>
            <SelectItem value="Client 2" className="text-primary-beige">
              Client 2
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
