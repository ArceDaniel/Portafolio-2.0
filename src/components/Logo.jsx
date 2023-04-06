import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => (
  <div className="flex items-center justify-center mt-2">
    <MotionLink
      href="/"
      className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold
      border border-solid border-transparent dark:border-light"
      whileHover={{
        backgroundColor: [
          "#121212",
          "#5E19FF",
          "#FF8000",
          "#f5f5f5",
          "#121212",

        ],
        transition:{
            duration: 3,
            repeat: Infinity,
        },
        scale: 1.05,
      }}
    >
      JA
    </MotionLink>
  </div>
);
export default Logo;
