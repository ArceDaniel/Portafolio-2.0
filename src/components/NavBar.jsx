import React from "react";
import CustomLink from "./CustomLink";
import GithubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedInIcon";
import Logo from "./Logo";
import { motion } from "framer-motion";



const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://www.linkedin.com/in/jonathandanielarce/" target={"_blank"}
        className="mx-4 w-8 h-8"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://github.com/ArceDaniel" target={"_blank"}
         className="mx-4 w-8 h-8"
         whileHover={{ y: -5 }}
         whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
      </nav>
      <nav className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </nav>
    </header>
  );
};

export default NavBar;
