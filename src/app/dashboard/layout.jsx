"use client";

import NavBar from "./_components/NavBar";

export default function layout({ children }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-primary-rich-black px-2 lg:px-10 xl:px-20">
      <NavBar></NavBar>
      {children}
    </div>
  );
}
