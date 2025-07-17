import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RxCross2 } from "react-icons/rx";

export default function Profile({ data, handleTherapist, handleClient }) {
  // Unique therapist and client lists
  const therapists = [...new Set(data.map((item) => item.therapist))];
  const clients = data.map((item) => item.client);

  // State for search, dropdown, and selection
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);

  // Filter and prioritize selected therapist
  let filtered = therapists.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );
  if (search && selected && filtered.includes(selected)) {
    filtered = [selected, ...filtered.filter((t) => t !== selected)];
  }

  // Always re-focus input after filtering or opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open, search]);

  // --- Add these states for client search ---
  const [clientSearch, setClientSearch] = useState("");
  const [clientOpen, setClientOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const clientInputRef = useRef(null);

  // Filter and prioritize selected client
  let filteredClients = clients.filter((c) =>
    c.toLowerCase().includes(clientSearch.toLowerCase())
  );
  if (
    clientSearch &&
    selectedClient &&
    filteredClients.includes(selectedClient)
  ) {
    filteredClients = [
      selectedClient,
      ...filteredClients.filter((c) => c !== selectedClient),
    ];
  }

  // Always re-focus input after filtering or opening for client
  useEffect(() => {
    if (clientOpen) {
      setTimeout(() => clientInputRef.current?.focus(), 10);
    }
  }, [clientOpen, clientSearch]);

  // Handlers
  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
    if (!isOpen) setSearch("");
  };
  const handleSelect = (value) => {
    setSelected(value);
    handleTherapist(value);
    setOpen(false);
  };

  // Handlers for client select
  const handleClientOpenChange = (isOpen) => {
    setClientOpen(isOpen);
    if (!isOpen) setClientSearch("");
  };
  const handleClientSelect = (value) => {
    setSelectedClient(value);
    handleClient(value);
    setClientOpen(false);
  };

  const handleClearTherapist = () => {
    handleTherapist(null);
    setSelected(null);
  };

  const handleClearClient = () => {
    handleClient(null);
    setSelectedClient(null);
    setSearch("");
    setClientSearch("");
  };

  return (
    <div className="pt-10 space-y-12 max-w-[500px] w-full mx-auto">
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
        <h2 className="font-medium text-lg text-primary-beige mb-4 flex items-center gap-1 justify-between">
          <span>Vind een agenda</span>
        </h2>
        {/* Therapist select with search */}
        <Select
          value={selected || ""}
          onValueChange={handleSelect}
          open={open}
          onOpenChange={handleOpenChange}
        >
          <div className="relative">
            <SelectTrigger className="agenda-dropdown w-full cursor-pointer rounded-3xl shadow-none border-primary-beige text-base py-5">
              <SelectValue placeholder="Selecteer een therapeut" />
            </SelectTrigger>

            {/* clear button */}
            <button
              onClick={handleClearTherapist}
              className="absolute top-1/2 right-[35px] -translate-y-1/2 text-sm font-medium text-[#f6ece2] opacity-[.5] rounded cursor-pointer"
            >
              <RxCross2 />
            </button>
          </div>

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
                placeholder="Zoek therapeut..."
                className="w-full px-2 py-1 rounded border border-primary-beige bg-transparent text-primary-beige"
                onFocus={(e) => e.stopPropagation()}
                autoFocus
              />
            </div>
            {filtered.length > 0 ? (
              filtered.map((t) => (
                <SelectItem
                  key={t}
                  value={t}
                  className={`text-primary-beige ${
                    selected === t ? "bg-primary-beige text-rich-black" : ""
                  }`}
                >
                  {t}
                </SelectItem>
              ))
            ) : (
              <div className="px-2 py-2 text-primary-beige">
                Geen resultaten
              </div>
            )}
          </SelectContent>
        </Select>
        {/* Client select with search */}
        <Select
          value={selectedClient || ""}
          onValueChange={handleClientSelect}
          open={clientOpen}
          onOpenChange={handleClientOpenChange}
        >
          <div className="relative">
            <SelectTrigger className="agenda-dropdown w-full cursor-pointer rounded-3xl shadow-none border-primary-beige text-base py-5">
              <SelectValue placeholder="Selecteer een cliënt" />
            </SelectTrigger>

            {/* clear button */}
            <button
              onClick={handleClearClient}
              className="absolute top-1/2 right-[35px] -translate-y-1/2 text-sm font-medium text-[#f6ece2] opacity-[.5] rounded cursor-pointer"
            >
              <RxCross2 />
            </button>
          </div>

          <SelectContent className="bg-linear-to-r from-green3 to to-green3 border border-secondary-beige max-h-[300px] overflow-y-auto">
            <div
              className="px-2 py-2"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                ref={clientInputRef}
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
                placeholder="Zoek cliënt..."
                className="w-full px-2 py-1 rounded border border-primary-beige bg-transparent text-primary-beige"
                onFocus={(e) => e.stopPropagation()}
                autoFocus
              />
            </div>
            {filteredClients.length > 0 ? (
              filteredClients.map((client, idx) => (
                <SelectItem
                  key={client + idx}
                  value={client}
                  className={`text-primary-beige ${
                    selectedClient === client
                      ? "bg-primary-beige text-rich-black"
                      : ""
                  }`}
                >
                  {client}
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
  );
}
