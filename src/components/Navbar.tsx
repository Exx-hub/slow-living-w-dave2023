"use client";

import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Burger from "./Burger";
import { IMenuContext, MenuContext } from "@/context/MenuContext";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { menuOpen, setMenuOpen } = useContext(MenuContext) as IMenuContext;

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
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      <div className={menuOpen ? "navMenu opacity-100 " : "navMenu opacity-0"}>
        {/* white overlay  */}
        <div className="absolute inset-0 -z-20 bg-gray-100 opacity-[85%]"></div>
        <nav className="flex flex-col space-y-3 font-bold py-2 text-[#2d8d5c]">
          <div className="border-b border-gray-300 px-4 pb-2 hover:text-[#005c29]">
            <Link href="/recipes">RECIPES</Link>
          </div>
          <div className="border-b border-gray-300 px-4 pb-2 hover:text-[#005c29]">
            <Link href="/about">ABOUT</Link>
          </div>
          <div className="border-b border-gray-300 px-4 pb-2 hover:text-[#005c29]">
            <Link href="/merch">MERCH</Link>
          </div>
          <div className=" px-4 hover:text-[#005c29]">
            <Link href="/socials">SOCIALS</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
