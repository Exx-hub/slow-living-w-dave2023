import { Reel } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

function ReelCard({ image, link, title }: Reel) {
  return (
    <section className="group relative overflow-hidden w-[250px] h-[350px] rounded-lg mb-8">
      <Link href={link} target="_blank">
        <Image
          src={image}
          alt={title}
          width={250}
          height={400}
          className="w-full transition-transform group-hover:scale-110 duration-500 ease-in-out"
        />
        {/* play icon  */}
        {/* 1/4 overlay  */}
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-black opacity-0 transition-opacity group-hover:opacity-[.15]"></div>
        <div className="absolute left-2 bottom-1 text-white flex items-center">
          <FaPlay />
          <h5 className="font-bold ml-2">{title}</h5>
        </div>
      </Link>
    </section>
  );
}

export default ReelCard;
