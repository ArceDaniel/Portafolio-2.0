import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"], variable: "..font-mount" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Arce Daniel | Full Stack Developer | MERN, PERN</title>
        <meta
          name="description"
          content="I am a highly motivated Full Stack Developer with expertise in MERN, PERN, and Firebase. Skilled in React.js, Node.js, SQL, and NoSQL databases, with experience using Agile methodologies and Git for version control. Committed to delivering high-quality solutions to complex problems."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, MERN, PERN, Firebase, Redux, Vite, Next, Nest, JavaScript, TypeScript, React, Node.js, Express, PostgreSQL, MongoDB, Git, GitHub, Docker, Agile, Scrum, TypeORM,
          azure, aws, vercel, paypal, railway, tailwind, cloudinary"
        />
        <meta name="author" content="Jonathan Daniel Arce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <link rel="icon" href="/logo.png" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
