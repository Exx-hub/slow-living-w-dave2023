import React, { Dispatch, SetStateAction, useState } from "react";

interface BurgerProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Burger({ menuOpen, setMenuOpen }: BurgerProps) {
  return (
    <div>
      <label className="burger" htmlFor="burger">
        <input
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
          type="checkbox"
          id="burger"
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}

export default Burger;
