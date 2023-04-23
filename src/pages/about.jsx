import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/developer-pic.jpg";
import AnimateNumbers from "@/components/AnimateNumbers";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Arce Daniel | Full Stack Developer | About Page</title>
        <meta name="description" content="As a self-taught Full Stack Developer, I have acquired solid skills in technologies such as MERN and PERN stacks, as well as Firebase, Redux, Vite, Next, and Nest. With experience leading and organizing team projects using Agile methodologies, I am dedicated to constantly expanding my knowledge and skills to provide innovative and efficient solutions. Learn more about my background and expertise as a Full Stack Developer here." />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-20 md:pt-18 sm:pt-8 sm:!p-4 md:!mt-24">
          <AnimatedText
            text="About Me"
            className="text-8xl text-center font-bold mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4-l sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-12 sm:gap-8">
            <div className="col-span-5 flex flex-col items-center justify-center
            md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75  dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium mt-4 lg:text-base">
                Hi there! My name is Jonathan Daniel Arce and I am a Fullstack
                Web Developer with a passion for creating robust and
                user-friendly applications. With experience in both front-end
                and back-end development, I love building websites and web
                applications from the ground up.
                <br />
                When I&rsquo;m not coding, you can find me diving into various
                topics such as music, psychology, economics, and powerlifting. I
                believe that a well-rounded perspective is key to understanding
                and developing innovative solutions.
                <br />
                As a detail-oriented and organized individual, I pride myself on
                being an effective problem-solver with a great sense of humor.
                In my free time, I love exploring new places and experimenting
                with new recipes in the kitchen.
                <br />
                Above all, I am passionate about collaborating with like-minded
                individuals who share my dedication to creating valuable and
                enjoyable experiences for users. Let&rsquo;s build something
                great together!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-lg border-2 boder-solid border-dark bg-light p-8 dark:bg-dark dark:border-light self-center
           md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-lg bg-dark  dark:bg-light" />
              <Image
                src={ProfilePic}
                className="w-full h-auto rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
              />
            </div>
            <div className="col-span-8 flex flex-wrap items-end justify-between mb-3 
            mt-6 md:order-3 md:gap-5 xs:flex-col xs:items-center">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block  text-7xl  font-bold md:text-6xl sm:text-5xl xs:text-7xl">
                  <AnimateNumbers value={10} />+
                </span>
                <h2 className="text-xl text-center font-medium capitalize text-dark/75  dark:text-light/75 
                md:text-sm xs:text-xl">
                  sastified clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block  text-7xl  font-bold md:text-6xl sm:text-5xl xs:text-7xl">
                  <AnimateNumbers value={20} />+
                </span>
                <h2 className="text-xl text-center font-medium capitalize text-dark/75  dark:text-light/75 
                md:text-sm xs:text-xl">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-7xl">
                  <AnimateNumbers value={1} />+
                </span>
                <h2 className="text-xl text-center font-medium capitalize text-dark/75  dark:text-light/75 
                md:text-sm xs:text-xl">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
