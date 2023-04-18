import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcons from "./LiIcons";

const Experiences = [
  {
    positions: "Software Engineer",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "May 2021 - Present",
    work: "Working on the Azure Data Explorer team, building a new UI for the product.",
  },
  {
    positions: "Software Engineer",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "May 2021 - Present",
    work: "Working on the Azure Data Explorer team, building a new UI for the product.",
  },
  {
    positions: "Software Engineer",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "May 2021 - Present",
    work: "Working on the Azure Data Explorer team, building a new UI for the product.",
  },
  {
    positions: "Software Engineer",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "May 2021 - Present",
    work: "Working on the Azure Data Explorer team, building a new UI for the product.",
  },
  {
    positions: "Software Engineer",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "May 2021 - Present",
    work: "Working on the Azure Data Explorer team, building a new UI for the product.",
  },
  {
    positions: "Software Engineer",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "May 2021 - Present",
    work: "Working on the Azure Data Explorer team, building a new UI for the product.",
  },
];

const Details = ({ positions, company, companyLink, time, work }) => {
 const ref = useRef(null);
 
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex
    flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
      initial={{y:50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {positions}&nbsp;{" "}
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark">
            @ {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75
        dark:text-light/75"
        >{time}</span>
        <p className="font-medium w-full">{work}</p>
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
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl ">
        Experience
      </h2>
      <div ref={target} className="w-[75%] mx-auto relative">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full
        bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4">
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
