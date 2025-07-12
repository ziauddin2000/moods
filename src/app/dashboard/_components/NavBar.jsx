"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import DownArrow from "../../../../public/icons/DownArrow";

export default function NavBar() {
  const [sessiesOpen, setSessiesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper for main menu (partial match)
  const isActiveMenu = (path) =>
    pathname === path || pathname.startsWith(path + "/");

  //  for dropdown (exact match)
  const isActiveDropdown = (path) => pathname === path;

  // Active Menu
  const isActiveRoute = (path) => {
    if (path === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(path);
  };

  // sessies Menu
  let sessies = [
    {
      label: "nieuwe sessie",
      icons: "/icons/plusIcon.svg",
      href: "/dashboard/sessies",
    },
    {
      label: "afgelopen sessies",
      icons: "/icons/past-session.svg",
      href: "/dashboard/sessies/pastsessies",
    },
    {
      label: "kamers",
      icons: "/icons/home-ic.svg",
      href: "/dashboard/sessies/kamers",
    },
  ];

  // accounts Menu
  let accounts = [
    {
      label: "mijn profiel",
      icons: "/icons/profile.svg",
      href: "#",
    },
    {
      label: "edit widgets",
      icons: "/icons/grid-ic.svg",
      href: "#",
    },
    {
      label: "taal",
      icons: "/icons/globe-ic.svg",
      href: "#",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav className="w-full bg-transparent py-2 grid grid-cols-2 lg:grid-cols-[20%_80%] xl:grid-cols-[30%_70%] justify-between gap-5 relative z-20 ">
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
          <Link
            href="/dashboard"
            className={`hover:text-green4 transition-colors ${
              isActiveRoute("/dashboard") && pathname === "/dashboard"
                ? "text-green4"
                : ""
            }`}
          >
            dashboard
          </Link>
          <div className="relative">
            <button
              className={`hover:text-green4 flex items-center gap-1 cursor-pointer transition-colors ${
                isActiveMenu("/dashboard/sessies") ? "text-green4" : ""
              }`}
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
                      href={sessie.href}
                      className={`px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal transition-colors ${
                        isActiveDropdown(sessie.href)
                          ? "text-green4 font-bold"
                          : ""
                      }`}
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
          <Link
            href="/dashboard/agenda"
            className={`hover:text-green4 transition-colors ${
              isActiveRoute("/dashboard/agenda") ? "text-green4" : ""
            }`}
          >
            agenda
          </Link>
          <Link
            href="#"
            className={`hover:text-green4 transition-colors ${
              isActiveRoute("/dashboard/clientenbase") ? "text-green4" : ""
            }`}
          >
            clientenbase
          </Link>
          <div className="relative">
            <button
              className={`hover:text-green4 flex items-center gap-1 cursor-pointer transition-colors ${
                isActiveRoute("/dashboard/account") ? "text-green4" : ""
              }`}
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
                      href={account.href}
                      className={`px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal transition-colors ${
                        isActiveRoute(account.href) ? "text-green-400" : ""
                      }`}
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
            <Link
              href="/dashboard"
              className={`py-2 hover:text-green4 transition-colors ${
                isActiveRoute("/dashboard") && pathname === "/dashboard"
                  ? "text-green4"
                  : "text-primary-beige"
              }`}
            >
              dashboard
            </Link>
            <div className="relative">
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isActiveMenu("/dashboard/sessies")
                    ? "text-green4"
                    : "text-primary-beige"
                }`}
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
                        href={sessie.href}
                        className={`px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal transition-colors ${
                          isActiveDropdown(sessie.href)
                            ? "text-green4 font-bold"
                            : "text-primary-beige"
                        }`}
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
            <Link
              href="/dashboard/agenda"
              className={`py-2 hover:green4 transition-colors ${
                isActiveRoute("/dashboard/agenda")
                  ? "text-green4"
                  : "text-white"
              }`}
            >
              agenda
            </Link>
            <Link
              href="#"
              className={`py-2 hover:text-green4 transition-colors ${
                isActiveRoute("/dashboard/clientenbase")
                  ? "text-green4"
                  : "text-white"
              }`}
            >
              clientenbase
            </Link>
            <div className="relative">
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isActiveRoute("/dashboard/account")
                    ? "text-green4"
                    : "text-white"
                }`}
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
                        href={account.href}
                        className={`px-4 py-2 hover:bg-[#3c4d4654] flex items-center justify-between text-lg font-normal transition-colors ${
                          isActiveRoute(account.href)
                            ? "text-green4"
                            : "text-primary-beige"
                        }`}
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
