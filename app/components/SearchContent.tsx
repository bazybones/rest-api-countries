"use client";
import React, { FormEvent, useState } from "react";
import SearchBar from "./SearchBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { filters } from "@/lib/utils";

export default function SearchContent() {
  return (
    <form>
      <div className="my-6 mx-4 md:mx-20 md:my-12 grid grid-cols-12 gap-5">
        <div className="col-span-full md:col-span-5">
          <SearchBar />
        </div>
        <div className="col-span-8 md:col-span-4 md:col-start-12">
          <Select>
            <SelectTrigger className="w-[9rem]">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              {filters.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
}
