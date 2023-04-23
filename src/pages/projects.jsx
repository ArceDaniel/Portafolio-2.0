import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import GithubIcon from "@/components/icons/GitHub";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AllSport from "../../public/images/projects/allsport.png";
import Dogs from "../../public/images/projects/dogs.png";
import Psiconnect from "../../public/images/projects/psiconnect.png";

const featuredProjects = [
  {
    type: "All Sports",
    title: "web application for sports",
    summary:
      "In this academically developed web application you can reserve the field of your favorite sport, searching by area and available times, also as the owner of a sports complex you can publicize your services",
    link: "https://allsport.vercel.app/",
    gitHub: "https://github.com/No-Country/c10-39-ft-nest-react",
    img: AllSport,
  },
];

const project = [
  {
    type: "Psiconnect",
    title: "web application for psychologists and patients",
    summary:"in this academically developed web application you can find a psychologist and make an appointment with him, also as a psychologist you can publicize your services",
    link: "https://psiconnect.vercel.app/",
    gitHub: "https://github.com/Psiconnect",
    img: Psiconnect,
  },
  {
    type: "Dogs",
    title: "web application to search for dog breeds",
    summary: "In this academically developed web application you can search for dog breeds and see their characteristics, also you can create your own dog",
    link: "https://dogy.vercel.app/",
    gitHub: "https://github.com/ArceDaniel/DOG-PI",
    img: Dogs,
  },
]

const FeaturedProjects = ({ type, title, summary, img, link, gitHub }) => {
  return (
    <article
      className="w-full flex items-center justify-between
        border border-solid border-dark rounded-3xl bg-light 
        p-12 relative dark:border-light dark:bg-dark
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl
        xs:p-4"
    >
      <div
        className="absolute top-0  shadow-2xl -right-3 -z-10 w-[101%] h-[102%]
       rounded-3xl bg-dark dark:bg-light"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursro-pointer overflow-hidden
            rounder-lg lg:w-full "
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
            justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="font-medium text-xl
         text-primary dark:text-primaryDark
         xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full tect-left text-4xl
           font-bold sm:text-sm"
          >
            {title}
          </h2>
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
          dark:bg-light dark:text-dark dark:hover:bg-primaryDark
          sm:px-4 sm:text-base"
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
        <Image
          src={img}
          alt={title}
          className="w-full h-auto
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
        <span className="font-medium text-xl text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full tect-left text-3xl font-bold  sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="text-dark/75 my-2 font-medium dark:text-light/75">
          {summary}
        </p>
        <div className="mt-4 flex items-center w-full justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-semibold  hover:underline  sm:px-4 sm:text-base"
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
        <Layout className="pt-16 flex flex-col items-center sm:!p-4 sm:!pt-32">
          <AnimatedText
            className={
              "text-8xl text-center font-bold mb-40 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            }
            text={"Imagination Trumps Knowledge!"}
          />
          <div className="grid max-w-full grid-cols-12 gap-y-24 gap-x-12 md:gap-x-0">
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
            {projects.map((project, index) => (
              <div className="col-span-6 md:col-span-12" key={index}>
                <Project
                  type={project.type}
                  title={project.title}
                  summary={project.summary}
                  img={project.img}
                  link={project.link}
                  gitHub={project.gitHub}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
