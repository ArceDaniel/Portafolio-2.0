'use client'
import Link from "next/link";
import { useRouter } from "next/router";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
  
        <span
          className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -button-0.5
          group-hover:w-full transition-[width] duration-300 ease ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  export default CustomLink;