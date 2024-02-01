// import { Input } from "@/components/ui/Input";
import React from "react";

export default function SearchBar() {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 absolute left-[4%] top-[25%]"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        className="h-14 dark:bg-dark-blue flex w-full rounded-sm border border-input bg-transparent px-3 py-1 pl-12 md:pl-20 text-md shadow-md transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-md place-content-center"
        placeholder="Search for a country..."
      />
    </div>
  );
}
