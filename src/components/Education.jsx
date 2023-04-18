import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcons from "./LiIcons";

const Educations = [
  {
    type: "Azure Developer (AZ-204)",
    time: "2023 - Present",
    place: "Junior Achievement",
    info: "Developing Solutions for Microsoft Azure.",
  },
  {
    type: "Full Stack Web Developer",
    time: "2022 - 2023",
    place: "Henry Bootcamp",
    info: "800 hours of theoretical and practical coursework",
  },
  {
    type: "Second Year in Psychology",
    time: "2020 - 2022",
    place: " University of Buenos Aires",
    info: "Degree in psychology",
  },
  {
    type: "Social Sciences High School Degree",
    time: "2015 - 2021",
    place: "Perpetuo Socorro de Quilmes",
    info: "bachelor's degree in social sciences",
  },
];

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex
    flex-col items-center justify-between  md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
        <span
          className="capitalize font-medium text-dark/75
        dark:text-light/75 xs:text-sm"
        >
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const target = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl md:mb-16 xs:text-4xl">
        Education
      </h2>
      <div
        ref={target}
        className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full"
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full
          md:w-[2px] md:left-[30px] xs:left-[20px] xs:w-[1px]
        bg-dark origin-top "
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4  xs:ml-2">
          {Educations.map((Education, index) => {
            return (
              <Details
                key={index}
                type={Education.type}
                time={Education.time}
                place={Education.place}
                info={Education.info}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Education;
