import React from "react";
import CustomLink from "./CustomLink";
import GithubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedInIcon";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";



const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light">
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
        <button
        className={`
        ml-3 flex items-center justify-center rounded-full
        p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
        `}
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
            {
                mode === 'dark' ? (
                    <SunIcon 
                    className=" fill-dark"
                    />
                ) : (
                   <MoonIcon 
                   className=" fill-dark"
                   
                   />
                )
            }
        </button>

      </nav>
      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
