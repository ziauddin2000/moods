"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DownArrow from "../../../../public/icons/DownArrow";

export default function NavBar() {
  const [sessiesOpen, setSessiesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // sessies Menu
  let sessies = [
    {
      label: "nieuwe sessie",
      icons: "/icons/plusIcon.svg",
    },
    {
      label: "afgelopen sessies",
      icons: "/icons/past-session.svg",
    },
    {
      label: "kamers",
      icons: "/icons/home-ic.svg",
    },
  ];

  // accounts Menu
  let accounts = [
    {
      label: "mijn profiel",
      icons: "/icons/profile.svg",
    },
    {
      label: "edit widgets",
      icons: "/icons/grid-ic.svg",
    },
    {
      label: "taal",
      icons: "/icons/globe-ic.svg",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav className="w-full bg-transparent py-2 grid grid-cols-2 lg:grid-cols-[20%_80%] xl:grid-cols-[30%_70%] justify-between gap-5 relative z-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Image
              src="/icons/logo.svg"
              width={160}
              height={40}
              className="block"
              alt="Logo"
            ></Image>
          </Link>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex justify-between items-center gap-8 text-lg text-primary-beige">
          <Link href="/dashboard" className="hover:text-green4">
            dashboard
          </Link>
          <div className="relative">
            <button
              className="hover:text-green-200 flex items-center gap-1 cursor-pointer"
              onClick={() => setSessiesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setSessiesOpen(false), 150)}
            >
              sessies
              <DownArrow></DownArrow>
            </button>
            {sessiesOpen && (
              <div className="absolute -left-5 mt-1 w-[220px] gap-1 bg-green1 rounded-lg shadow-lg py-2 flex flex-col text-left animate-fade-in z-30 ">
                {sessies.map((sessie, idx) => {
                  return (
                    <Link
                      key={idx}
                      href="#"
                      className="px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal"
                    >
                      <span>{sessie.label}</span>
                      <Image
                        src={sessie.icons}
                        width={20}
                        height={20}
                        alt={sessie.label}
                        priority
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-green-200">
            agenda
          </Link>
          <Link href="#" className="hover:text-green-200">
            clientenbase
          </Link>
          <div className="relative">
            <button
              className="hover:text-green-200 flex items-center gap-1 cursor-pointer"
              onClick={() => setAccountOpen((v) => !v)}
              onBlur={() => setTimeout(() => setAccountOpen(false), 150)}
            >
              Account
              <DownArrow></DownArrow>
            </button>
            {accountOpen && (
              <div className="absolute -right-5 mt-1 w-[220px] gap-1 bg-green1 rounded-lg shadow-lg py-2 flex flex-col text-left animate-fade-in z-30 ">
                {accounts.map((account, idx) => {
                  return (
                    <Link
                      key={idx}
                      href="#"
                      className="px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal"
                    >
                      <span>{account.label}</span>
                      <Image
                        src={account.icons}
                        width={20}
                        height={20}
                        alt={account.label}
                        priority
                      />
                    </Link>
                  );
                })}

                <div className="px-4">
                  <div className="h-[1px] w-full bg-[#FFFFFF80]"></div>
                </div>

                <Link
                  href="/auth"
                  className="px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal"
                >
                  <span>Logout</span>
                  <Image
                    src="/icons/logout-ic.svg"
                    width={20}
                    height={20}
                    alt="Logout"
                    priority
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="lg:hidden flex items-center justify-end text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#191C1F] flex flex-col gap-2 py-4 px-4 lg:hidden animate-fade-in z-40">
            <Link href="#" className="text-white py-2 hover:text-green-200">
              dashboard
            </Link>
            <div className="relative">
              <button
                className="text-white flex items-center gap-1 "
                onClick={() => setSessiesOpen((v) => !v)}
              >
                sessies
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {sessiesOpen && (
                <div className="ml-2 mt-1 flex flex-col rounded-lg shadow-lg py-2 bg-green1">
                  {sessies.map((sessie, idx) => {
                    return (
                      <Link
                        key={idx}
                        href="#"
                        className="px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal"
                      >
                        <span className="text-primary-beige">
                          {sessie.label}
                        </span>
                        <Image
                          src={sessie.icons}
                          width={20}
                          height={20}
                          alt={sessie.label}
                          priority
                        />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <Link href="#" className="text-white py-2 hover:text-green-200">
              agenda
            </Link>
            <Link href="#" className="text-white py-2 hover:text-green-200">
              clientenbase
            </Link>
            <div className="relative">
              <button
                className="text-white flex items-center gap-1 "
                onClick={() => setAccountOpen((v) => !v)}
              >
                Account
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {accountOpen && (
                <div className="ml-2 mt-1 flex flex-col rounded-lg shadow-lg py-2 bg-green1">
                  {accounts.map((account, idx) => {
                    return (
                      <Link
                        key={idx}
                        href="#"
                        className="px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal"
                      >
                        <span className="text-primary-beige">
                          {account.label}
                        </span>
                        <Image
                          src={account.icons}
                          width={20}
                          height={20}
                          alt={account.label}
                          priority
                        />
                      </Link>
                    );
                  })}

                  <div className="px-4">
                    <div className="h-[1px] w-full bg-[#FFFFFF80]"></div>
                  </div>

                  <Link
                    href="/auth"
                    className="px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal"
                  >
                    <span className="text-primary-beige">Logout</span>
                    <Image
                      src="/icons/logout-ic.svg"
                      width={20}
                      height={20}
                      alt="Logout"
                      priority
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
