import React from "react";
import CustomLink from "./CustomLink";
import GithubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedInIcon";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import CustomLinkMobile from "./CustomLinkMobile";

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="fixed top-0 z-20 bg-light/75 w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light dark:bg-dark/75"
    >
      <button
        className="flex-col justify-center items-center
      hidden lg:flex absolute left-12 top-1/2 transform -translate-y-1/2"
        onClick={handleMenu}
      >
        <span
          className={`bg-dark dark:bg-light block w-6 h-0.5 rounded-sm 
        transition-transform duration-300 ease-out
        ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        />
        <span
          className={`bg-dark dark:bg-light block w-6 h-0.5 rounded-sm
        transition-transform duration-300 ease-out
        ${isMenuOpen ? "opacity-0" : "-opacity-100 my-0.5"}`}
        />
        <span
          className={`bg-dark dark:bg-light block w-6 h-0.5 rounded-sm translate-y-0.5 
        transition-transform duration-300 ease-out
        
        ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        />
      </button>
      <div
        className="w-full flex justify-between items-center
    lg:hidden"
      >
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>
        <nav className="z-20 flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/jonathandanielarce/"
            target={"_blank"}
            className="mx-4 w-8 h-8"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/ArceDaniel"
            target={"_blank"}
            className="mx-4 w-8 h-8"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <button
            className={`
        ml-3 flex items-center justify-center rounded-full
        p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "dark" ? (
              <SunIcon className=" fill-dark" />
            ) : (
              <MoonIcon className=" fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x:"-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-w-[70vw] z-20 flex flex-col justify-between items-center
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/75 dark:bg-light/75 rounded-lg
        backdrop-blur-md py-20"
        >
          <nav
            className="
        flex flex-col justify-center items-center text-light dark:text-dark
        "
          >
            <CustomLinkMobile toggle={handleMenu} href="/" title="Home" />
            <CustomLinkMobile toggle={handleMenu} href="/about" title="About" />
            <CustomLinkMobile
              toggle={handleMenu}
              href="/projects"
              title="Projects"
            />
          </nav>
          <nav className="z-20 flex items-center justify-center flex-wrap mt-8 gap-1">
            <motion.a
              href="https://www.linkedin.com/in/jonathandanielarce/"
              target={"_blank"}
              className="mx-4 w-8 h-8 bg-light/90 rounded-full dark:bg-dark/90 sm:mx-1"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/ArceDaniel"
              target={"_blank"}
              className="mx-4 w-8 h-8 bg-light/90 rounded-full dark:bg-dark/90 sm:mx-1"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <button
              className={`
            ml-3 flex items-center justify-center rounded-full
            sm:mx-1
            p-1 ${
              mode !== "light" ? "bg-dark text-light" : "bg-light text-dark"
            }
            `}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? (
                <SunIcon className=" fill-dark" />
              ) : (
                <MoonIcon className=" fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] translate-x-[-50%] z-50 opacity-100">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
