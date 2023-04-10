"use client";
import { useRouter } from "next/router";
import React from "react";

const CustomLinkMobile = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = (e) => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[2px] inline-block w-0 bg-light absolute left-0 -button-0.5
          dark:bg-dark
          group-hover:w-full transition-[width] duration-300 ease  ${
            router.asPath === href ? "w-full" : "w-0"
          }
          `}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomLinkMobile;
