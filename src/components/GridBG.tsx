"use client";

import { IMenuContext, MenuContext } from "@/context/MenuContext";
import Image from "next/image";
import React, { useContext } from "react";

function GridBG() {
  const { menuOpen, setMenuOpen } = useContext(MenuContext) as IMenuContext;
  return (
    <div className="grid-container">
      <figure
        className={`figure col-[7/span_4] row-[1] w-[300px] xl:w-[400px] 2xl:w-[450px] ${
          menuOpen && "blurred"
        }`}
      >
        <Image
          src="/grid-images/camping.jpg"
          alt=""
          width={500}
          height={300}
          style={{ width: "auto" }}
        />
      </figure>
      <figure
        className={`figure col-[2/span_4] mt-[60vh] w-[300px] 2xl:w-[400px] ${
          menuOpen && "blurred"
        }`}
      >
        <Image src="/grid-images/liwaliwa.jpg" alt="" width={400} height={500} />
      </figure>
      <figure
        className={`figure col-[5/span_3] row-[2] w-[250px] xl:w-[300px] 2xl:w-[350px] -translate-y-[130px] -translate-x-[30px]  xl:col-[4/span_3] xl:-translate-x-[0px] 2xl:-translate-y-[150px] ${
          menuOpen && "blurred"
        }`}
      >
        <Image src="/grid-images/camping2.jpg" alt="" width={400} height={500} />
      </figure>

      <figure
        className={`figure col-[9/span_3] row-[2] -translate-y-[180px] ${menuOpen && "blurred"}`}
      >
        <Image src="/grid-images/aeropress.jpg" alt="" width={500} height={300} />
      </figure>

      <aside className="col-[5/span_4] row-[3] text-center text-xl md:text-2xl font-thin">
        <p>
          {`
        Slow living [sləʊ ˈlɪvɪŋ] (noun) is a lifestyle that focuses on a slower, calmer, more thoughtful approach to all
        aspects of everyday life.
      `}
        </p>
      </aside>

      {/* more pictures  */}

      <figure className={`figure col-[2/span_4] row-[5] mt-[120px] z-10 ${menuOpen && "blurred"}`}>
        <Image
          src="/grid-images/salpicao.jpg"
          alt=""
          width={300}
          height={150}
          style={{ width: "auto" }}
        />
      </figure>

      <figure className={`figure col-[9/span_2] row-[5] mt-[120px] z-0 ${menuOpen && "blurred"}`}>
        <Image src="/grid-images/food3.jpg" alt="" width={300} height={150} />
      </figure>

      {/* then another definition  */}
      <aside className="col-[5/span_4] row-[6] text-center text-xl md:text-2xl font-thin  mt-[100px]">
        <blockquote>
          &quot;Learn to give yourself time for exercising, eating good food, playing games,
          breathing fresh air... truly living and enjoying life.&quot;
        </blockquote>
      </aside>

      {/* then more pictures */}
      <figure className={`figure col-[8/span_4] row-[7]  mt-[120px] ${menuOpen && "blurred"}`}>
        <Image src="/grid-images/af.jpg" alt="" width={500} height={250} />
      </figure>

      <figure className={`figure col-[2/span_2] row-[7] mt-[120px] ${menuOpen && "blurred"}`}>
        <Image src="/grid-images/game2.jpg" alt="" width={250} height={400} />
      </figure>

      <figure className={`figure col-[6/span_2] row-[8] mt-[100px] ${menuOpen && "blurred"}`}>
        <Image src="/grid-images/squats.jpg" alt="" width={250} height={400} />
      </figure>

      <figure className={`figure col-[8/span_2] row-[8] mt-[50px] ${menuOpen && "blurred"}`}>
        <Image src="/grid-images/flyes.jpg" alt="" width={250} height={400} />
      </figure>
    </div>
  );
}

export default GridBG;
