import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark 
      dark:bg-light dark:text-dark dark:shadow-light absolute cursor-pointer"
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: x,
        y: y,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-6 w-full text-center">Skills</h2>
      <div
        className="w-full h-screen relative flex items-center justify-center 
        rounded-full bg-circularLight dark:bg-circularDark"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
          dark:bg-light dark:text-dark dark:shadow-light absolute cursor-pointer"
          whileHover={{ scale: 1.05, cursor: "pointer" }}
        >
          web
        </motion.div>
        <Skill name="ReactJS" x="-35vh" y="-35vh" />
        <Skill name="JavaScript" x="7vh" y="-28vh" />
        <Skill name="TypeScript" x="-25vh" y="25vh" />
        <Skill name="NodeJS" x="38vh" y="20vh" />
        <Skill name="Express" x="25vh" y="30vh" />
        <Skill name="NestJS" x="17vh" y="-10vh" />
        <Skill name="NextJS" x="-26vh" y="-15vh" />
        <Skill name="Vite" x="50vh" y="-30vh" />
        <Skill name="Docker" x="45vh" y="40vh" />
        <Skill name="Graphql" x="55vh" y="-10vh" />
        <Skill name="no SQL" x="65vh" y="0vh" />
        <Skill name="Azure" x="-75vh" y="15vh" />
        <Skill name="SQL" x="-60vh" y="-10vh" />
        <Skill name="Tailwind" x="-70vh" y="30vh" />
        <Skill name="Git" x="-70vh" y="-20vh" />
      </div>
    </>
  );
};

export default Skills;
