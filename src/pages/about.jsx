import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/developer-pic.jpg";
import AnimateNumbers from "@/components/AnimateNumbers";

const about = () => {
  return (
    <>
      <Head>
        <title>Arce Daniel | About Page</title>
        <meta name="description" content="About page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="About Me" className="text-6xl font-bold mb-16" />
          <div className="grid w-full grid-cols-8 gap-12">
            <div className="col-span-8 flex flex-row items-end justify-between mb-3">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block  text-7xl  font-bold">
                  <AnimateNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  sastified clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block  text-7xl  font-bold">
                  <AnimateNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimateNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 ">
                Biography
              </h2>
              <p className="font-medium mt-4">
                Hi there! My name is Jonathan Daniel Arce and I am a Fullstack Web Developer
                with a passion for creating robust and user-friendly
                applications. With experience in both front-end and back-end
                development, I love building websites and web applications from
                the ground up.
                <br />
                When I&rsquo;m not coding, you can find me diving into various topics
                such as music, psychology, economics, and powerlifting. I
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
                enjoyable experiences for users. Let&rsquo;s build something great
                together!
              </p>
            </div>
            <div className="col-span-4 relative h-max rounded-lg border-2 boder-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-lg bg-dark" />
              <Image src={ProfilePic} className="w-full h-auto rounded-lg" />
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
