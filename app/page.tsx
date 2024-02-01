"use client";
import React from "react";
import Header from "./components/Header";
import SearchContent from "./components/SearchContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CardData from "./components/Card";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <SearchContent />
      <CardData />
    </QueryClientProvider>
  );
}
