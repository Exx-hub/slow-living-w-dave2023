"use client";

import Navbar from "@/components/Navbar";
import ContextProvider from "@/context/MenuContext";
import React from "react";

function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContextProvider>
      <Navbar />
      {children}
    </ContextProvider>
  );
}

export default SubLayout;
