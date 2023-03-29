import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { durations: 30000});
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (v) => {
      if (ref.current && v.toFixed(0) <= value) {
        ref.current.textContent = v.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

export default AnimateNumbers;