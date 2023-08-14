"use client";

import Image from "next/image";
import Bars from "./icons/Bars";
import { useCallback, useEffect, useState } from "react";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyle = {
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    // backgroundColor: visible ? "transparent" : "black",
  };
  return (
    <nav
      style={navbarStyle}
      className="w-full fixed top-0 p-5 bg-transparent z-50 flex justify-between items-center transition-all duration-[0.5s] ease-[ease-in-out] delay-[0s];"
    >
      <Image src="/dave-logo.png" alt="" width={80} height={40} />
      <Bars />
    </nav>
  );
}

export default Navbar;

// -translate-y-full
// translate-y-0
