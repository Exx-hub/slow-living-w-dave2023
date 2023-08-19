import React, { useState } from "react";

function Burger() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="burger" htmlFor="burger">
      <input
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        type="checkbox"
        id="burger"
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default Burger;
