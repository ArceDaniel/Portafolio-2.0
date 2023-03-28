import Link from "next/link";
import React from "react";
import CirculeText from "./icons/CirculeText";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center
    overflow-hidden cursor-pointer
    "
    >
      <div className="w-36 h-auto flex items-center justify-center relative">
        <CirculeText className="fill-dark animate-spin-slow" />
        <Link
          href="mailto:jonathandanielarce9@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 transform
           -translate-x-1/2 -translate-y-1/2 bg-dark
        text-light shadow-md border-solid border-2 border-dark rounded-full w-20 h-20
        font-bold hover:bg-light hover:text-dark
        "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
