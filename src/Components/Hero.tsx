"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
  <div className="bg-amber-800">
    <section className="body-font h-screen relative flex items-center justify-center">
     
      <div className=" container mx-auto px-5 py-24 flex flex-col md:flex-row items-center h-full">
       
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 text-amber-950 font-bold font-serif">
            My Portfolio
          </h1>
          <h2 className="font-extrabold text-black font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-8">
            The Magic Of Programming Is In The Power{" "}
            <br className="hidden md:block" />
            To Turn Imagination Into Innovation
          </h2>
          <div className="flex justify-center md:justify-start">
            <Link href="#Contact">
              <button className="inline-flex text-white font-serif bg-[rgb(111,78,55)] border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0 lg:w-1/2 w-5/6 flex justify-center">
          <Image
            className="object-cover object-center rounded-full"
            alt="hero"
            width={200}
            height={200}
            src={"/bg.jpeg"}
          />
        </div>
      </div>
     
    </section>
    </div>
  );
};

export default Hero;
