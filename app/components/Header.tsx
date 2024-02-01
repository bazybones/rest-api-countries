import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-auto bg-white dark:bg-dark-blue shadow-md m-auto">
      <nav
        className="mx-auto gap-3 flex max-w-7xl items-center justify-between p-5 lg:px-2"
        aria-label="Global"
      >
        <div className="py-1 flex whitespace-nowrap lg:flex-1">
          <span className="font-bold text-sm lg:text-2xl">
            <Link href={"/"}>Where in the world?</Link>
          </span>
        </div>

        <div className="whitespace-nowrap lg:flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
