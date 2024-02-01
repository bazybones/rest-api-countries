// import Image from "next/image";
"use client";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export default function CardData() {
  interface Country {
    name: string;
    flags: {
      svg: string;
      png: string;
    };
    population: string;
    region: string;
    capital: string;
  }
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://restcountries.com/v2/all").then((res) => res.json()),
  });

  if (isPending)
    return (
      <div className="pb-5 mx-4 md:mx-20 grid grid-cols-4 gap-12">
        {Array.from({ length: 8 }, (_, index) => (
          <Card
            className="h-[20.6rem] bg-white shadow-md dark:bg-dark-blue col-span-4 md:col-span-2 lg:col-span-1 "
            key={index}
          >
            <CardContent className="p-0">
              <Skeleton className=" bg-gray-200 dark:bg-dark-gray w-full h-[10rem] rounded-none rounded-t-md" />
            </CardContent>
            <CardContent className="pt-5">
              <Skeleton className="bg-gray-200 dark:bg-dark-gray w-[100%] h-[1.2rem] rounded-none mt-2" />
              <Skeleton className="bg-gray-200 dark:bg-dark-gray w-[80%] h-[0.75rem] rounded-none mt-4" />
              <Skeleton className="bg-gray-200 dark:bg-dark-gray w-[80%] h-[0.75rem] rounded-none mt-4" />
              <Skeleton className="bg-gray-200 dark:bg-dark-gray w-[80%] h-[0.750rem] rounded-none mt-4" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="pb-5 mx-4 md:mx-20 grid grid-cols-4 gap-12">
        {data.map((item: Country, index: number) => (
          <Card
            className="bg-white shadow-md dark:bg-dark-blue col-span-4 md:col-span-2 lg:col-span-1 h-[auto]"
            key={index}
          >
            <CardContent className="p-0">
              <div className="w-full">
                <Image
                  priority
                  width={250}
                  height={350}
                  alt={`${item.name}-flag`}
                  src={item.flags.png}
                  className="bg-cover  w-[100%] h-[10rem] rounded-t-md"
                />
              </div>
              <CardContent className="pt-5">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <div className="mt-2">
                  <strong>Population:</strong>{" "}
                  {item.population.toLocaleString()}
                </div>
                <div className="mt-2">
                  <strong>Region:</strong> {item.region}
                </div>
                <div className="mt-2">
                  <strong>Capital:</strong> {item.capital}
                </div>
              </CardContent>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
