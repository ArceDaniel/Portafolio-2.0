import Link from "next/link";
import React from "react";
import CirculeText from "./icons/CirculeText";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center
    overflow-hidden cursor-pointer
    md:right-8 md:left-auto md:top-1 md:bottom-auto md:z-50"
    >
      <div className="w-36 h-auto flex items-center justify-center relative
      md:w-24 xs:w-20">
        <CirculeText className="fill-dark animate-spin-slow
        dark:fill-light" />
        <Link
          href="mailto:jonathandanielarce9@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 transform
           -translate-x-1/2 -translate-y-1/2 bg-dark
        text-light shadow-md border-solid border-2 border-dark rounded-full w-20 h-20
        font-bold hover:bg-light hover:text-dark
        dark:bg-light dark:text-dark dark:hover:bg-dark
         dark:hover:text-light
         md:w-12 md:h-12 md:text-[10px] md:font-medium
         xs:w-10 xs:h-10 xs:text-[8px] xs:font-medium
         "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
