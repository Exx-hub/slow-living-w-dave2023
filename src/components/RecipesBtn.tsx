import Link from "next/link";
import React from "react";

function RecipesBtn() {
  return (
    <section className="h-[50vh] flex items-center justify-center my-[200px]">
      <Link
        href="/recipes"
        className="border border-black py-5 px-10 min-w-[500px] text-center text-2xl font-thin hover:font-bold transition-all duration-200"
      >
        VIEW RECIPES
      </Link>
    </section>
  );
}

export default RecipesBtn;
