"use client";

import { convertDate } from "@/helpers/convertDate";
import { Blog } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { IMenuContext, MenuContext } from "@/context/MenuContext";
import { useContext } from "react";

function RecipeCard({ blog }: { blog: Blog }) {
  const { menuOpen } = useContext(MenuContext) as IMenuContext;

  const { title, date, image, slug } = blog;

  const imagePath = `/blogImages/${slug}/${image}`;
  const readableDate = convertDate(date);

  return (
    <figure className={`mb-2 mt-2 ${menuOpen && "blurred"}`}>
      <Link href={`/recipes/${slug}`}>
        <div className="w-[320px] h-[200px] md:w-[400px] overflow-hidden md:h-[266px] rounded-lg shadow-lg">
          <Image
            src={imagePath}
            width={400}
            height={300}
            alt={`photo of ${slug}`}
            placeholder="blur"
            blurDataURL={imagePath}
          />
        </div>

        <figcaption className="flex justify-between items-center px-1 py-2">
          <h2 className="font-semibold text-xl">{title}</h2>
          <p className="text-gray-500">{readableDate}</p>
        </figcaption>
      </Link>
    </figure>
  );
}

export default RecipeCard;
