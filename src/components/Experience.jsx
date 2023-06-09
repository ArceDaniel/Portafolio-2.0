import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcons from "./LiIcons";

const Experiences = [
  {
    positions: "Trainee of Software Development",
    company: "Shokworks",
    companyLink: "https://shokworks.io/",
    time: "Mar 2023 - Present",
    work: "Solving business challenges with design and technology.",
  },
  {
    positions: "Team Leader and Software Developer",
    company: "No-country",
    companyLink: "https://www.nocountry.tech/",
    time: "Feb 2023 - Mar 2023",
    work: "team leader in the development of a mobile application and developer in a web page",
  },
];

const Details = ({ positions, company, companyLink, time, work }) => {
 const ref = useRef(null);
 
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex
    flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
      initial={{y:50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {positions}&nbsp;{" "}
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark">
            @ {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75
        dark:text-light/75 xs:text-sm"
        >{time}</span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const target = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>
      <div ref={target} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full
          md:w-[2px] md:left-[30px] xs:left-[20px] xs:w-[1px]
        bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          {Experiences.map((experience, index) => {
            return (
              <Details
                key={index}
                positions={experience.positions}
                company={experience.company}
                companyLink={experience.companyLink}
                time={experience.time}
                work={experience.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
