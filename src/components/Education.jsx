import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcons from "./LiIcons";

const Educations = [
  {
    type: "education",
    time: "2016 - 2020",
    place: "university of the philippines",
    info: "Bachelor of Science in Computer Science",
  },
  {
    type: "education",
    time: "2016 - 2020",
    place: "university of the philippines",
    info: "Bachelor of Science in Computer Science",
  },
  {
    type: "education",
    time: "2016 - 2020",
    place: "university of the philippines",
    info: "Bachelor of Science in Computer Science",
  },
  {
    type: "education",
    time: "2016 - 2020",
    place: "university of the philippines",
    info: "Bachelor of Science in Computer Science",
  },
  {
    type: "education",
    time: "2016 - 2020",
    place: "university of the philippines",
    info: "Bachelor of Science in Computer Science",
  },
  {
    type: "education",
    time: "2016 - 2020",
    place: "university of the philippines",
    info: "Bachelor of Science in Computer Science",
  },
  {
    type: "education",
    time: "2016 - 2020",
    place: "university of the philippines",
    info: "Bachelor of Science in Computer Science",
  },
];

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex
    flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div ref={target} className="w-[75%] mx-auto relative">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full
        bg-dark origin-top "
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4">
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
