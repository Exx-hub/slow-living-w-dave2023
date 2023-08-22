import Image from "next/image";
import React from "react";

function RecipeCard() {
  return (
    <section className="mb-2 mt-2">
      {/* image  */}
      <Image
        src="/grid-images/aeropress.jpg"
        width={400}
        height={300}
        alt=""
        className="rounded-lg"
      />
      <div className="flex justify-between items-center px-1 py-2">
        {/* title */}
        <h2 className="font-semibold text-xl">Aeropress Coffee</h2>
        {/* date  */}
        <p className="text-gray-500">Aug 01 2023</p>
      </div>
    </section>
  );
}

export default RecipeCard;
