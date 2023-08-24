import { convertDate } from "@/helpers/convertDate";
import { Blog } from "@/interfaces";
import Image from "next/image";
import React from "react";

function RecipeCard({ blog }: { blog: Blog }) {
  const { title, date, image, slug } = blog;

  const imagePath = `/blogImages/${slug}/${image}`;
  const readableDate = convertDate(date);

  return (
    <section className="mb-2 mt-2">
      {/* image  */}
      <div className="w-[400px] overflow-hidden h-[266px]">
        <Image src={imagePath} width={400} height={300} alt="" className="rounded-lg" />
      </div>
      <div className="flex justify-between items-center px-1 py-2">
        {/* title */}
        <h2 className="font-semibold text-xl">{title}</h2>
        {/* date  */}
        <p className="text-gray-500">{readableDate}</p>
      </div>
    </section>
  );
}

export default RecipeCard;
