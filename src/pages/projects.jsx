import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import GithubIcon from "@/components/icons/GitHub";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfilePic from "../../public/images/projects/crypto-screener-cover-image.jpg";

const featuredProjects = [
  {
    type: "React",
    title: "React Portfolio",
    summary: "This is my portfolio website built with React and Next.js",
    link: "https://arcedaniel.com",
    gitHub: "   ",
    img: ProfilePic,
  },
];

const FeaturedProjects = ({ type, title, summary, img, link, gitHub }) => {
  return (
    <article
      className="w-full flex items-center justify-between
        border border-solid border-dark rounded-3xl bg-light 
        p-12 relative dark:border-light dark:bg-dark"
    >
      <div
        className="absolute top-0  shadow-2xl -right-3 -z-10 w-[101%] h-[102%]
       rounded-3xl bg-dark dark:bg-light"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursro-pointer overflow-hidden
            rounder-lg  "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto dark:border dark:border-light dark:rounded-sm
          hover:scale-105 transition-all duration-300 ease-in-out transform"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1024px) 50vw,
                50vw"
        />
      </Link>
      <div
        className="flex w-1/2 flex-col items-start
            justify-between pl-6"
      >
        <span className="font-medium text-xl text-primary dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full tect-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="text-dark/75 my-2 font-medium dark:text-light/75">
          {summary}
        </p>
        <div className="mt-2 flex items-center w-full">
          <Link href={gitHub} target="_blank" className="w-10 h-10 mr-4">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light 
          p-2 px-6 text-lg font-semibold hover:bg-primary
          dark:bg-light dark:text-dark dark:hover:bg-primaryDark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, gitHub }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center
    border rounded-2xl border-solid border-dark bg-light p-6 relative
    dark:border-light dark:bg-dark"
    >
      <div
        className="absolute top-0  shadow-2xl -right-3 -z-10 w-[102%] h-[102%]
       rounded-3xl bg-dark dark:bg-light"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursro-pointer overflow-hidden
            rounder-lg  "
      >
        <Image src={img} alt={title} className="w-full h-auto
        dark:border dark:border-light dark:rounded-sm
        hover:scale-105 transition-all duration-300 ease-in-out transform" 
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1024px) 50vw,
        50vw"
        
        />
      </Link>
      <div
        className="flex w-full flex-col items-start
            justify-between mt-4"
      >
        <span className="font-medium text-xl text-primary dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full tect-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="text-dark/75 my-2 font-medium dark:text-light/75">
          {summary}
        </p>
        <div className="mt-4 flex items-center w-full justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-semibold  hover:underline"
          >
            Visit
          </Link>
          <Link href={gitHub} target="_blank" className="w-10 h-10 mr-4">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Arce Daniel | Project Page</title>
        <meta name="description" content="Project page" />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-16 flex flex-col items-center ">
          <AnimatedText
            className="mb-40 relative text-8xl "
            text={"Imagination Trumps Knowledge!"}
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              {featuredProjects.map((project, index) => (
                <FeaturedProjects
                  key={index}
                  type={project.type}
                  title={project.title}
                  summary={project.summary}
                  img={project.img}
                  link={project.link}
                  gitHub={project.gitHub}
                />
              ))}
            </div>
            <div className="col-span-6">
              <Project
                type="React"
                title="React Portfolio"
                summary="This is my portfolio website built with React and Next.js"
                link="https://arcedaniel.com"
                gitHub="   "
                img={ProfilePic}
              />
            </div>
            <div className="col-span-6">
              <Project
                type="React"
                title="React Portfolio"
                summary="This is my portfolio website built with React and Next.js"
                link="https://arcedaniel.com"
                gitHub="   "
                img={ProfilePic}
              />
            </div>
            <div className="col-span-12">
              {featuredProjects.map((project, index) => (
                <FeaturedProjects
                  key={index}
                  type={project.type}
                  title={project.title}
                  summary={project.summary}
                  img={project.img}
                  link={project.link}
                  gitHub={project.gitHub}
                />
              ))}
            </div>
            <div className="col-span-6">
              <Project
                type="React"
                title="React Portfolio"
                summary="This is my portfolio website built with React and Next.js"
                link="https://arcedaniel.com"
                gitHub="   "
                img={ProfilePic}
              />
            </div>
            <div className="col-span-6">
              <Project
                type="React"
                title="React Portfolio"
                summary="This is my portfolio website built with React and Next.js"
                link="https://arcedaniel.com"
                gitHub="   "
                img={ProfilePic}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
