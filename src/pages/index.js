import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import LinkArrow from "@/components/icons/LinksArrows";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/images/profile/yo.png";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen
      dark:text-light 2xl:">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w.1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Full Stack Solutions for Modern Businesses"
                className="text-6xl font-bold text-left"
              />
              <p className="my-4 text-base font-medium">
                In today&rsquo;s fast-paced digital world, businesses need web
                applications that can keep up with their evolving needs. As a
                full-stack developer, I specialize in developing custom web
                solutions that are scalable, reliable, and user-friendly.
                Explore my portfolio and see how I can help your business
                thrive.
              </p>
              <div className="flex items-centers mt-2 self-center justify-center gap-5">
                <Link
                  target={"_blank"}
                  href="/CV.pdf"
                  download={true}
                  className="flex items-center justify-center px-6 py-2 text-base text-light bg-dark rounded-md hover:bg-primary font-semibold
                  dark:text-dark dark:bg-light dark:hover:bg-primaryDark"
                >
                  {" "}
                  Resume <LinkArrow className={"w-5 h-5 ml-2"} />
                </Link>
                <Link
                  target={"_blank"}
                  href="mailto:jonathandanielarce9@gmail.com"
                  className="flex items-center justify-center px-6 py-2 text-base font-semibold text-dark bg-light rounded-md hover:bg-primaryDark border border-dark
                   dark:border-light dark:text-light dark:bg-dark
                   dark:hover:bg-primary"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </div>
            </div>
            <div className="w-[120%]">
              <Image
                src={profile}
                alt="Arce Daniel"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1024px) 50vw,
                50vw"
              />
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
