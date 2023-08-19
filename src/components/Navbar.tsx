"use client";

import Image from "next/image";
import Bars from "./icons/Bars";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Burger from "./Burger";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="relative">
      <div
        style={navbarStyle}
        className="w-full fixed top-0 py-5 px-10 bg-transparent z-50 flex justify-between items-center transition-all duration-[0.5s] ease-[ease-in-out] delay-[0s];"
      >
        <Image src="/dave-logo.png" alt="" width={80} height={40} style={{ width: "auto" }} />
        {/* <Bars /> */}

        <Burger />
      </div>

      {/* <nav className="absolute bg-red-400 h-screen inset-0 z-[99]">
        <Link href="/recipes">RECIPES</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/merch">MERCH</Link>
        <Link href="/socials">SOCIALS</Link>
      </nav> */}
    </header>
  );
}

export default Navbar;
