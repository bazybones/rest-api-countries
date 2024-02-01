import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filters = [
  {
    id: 1,
    name: "Africa",
  },
  {
    id: 2,
    name: "Americas",
  },
  {
    id: 3,
    name: "Asia",
  },
  {
    id: 4,
    name: "Europe",
  },
  {
    id: 5,
    name: "Oceania",
  },
];
