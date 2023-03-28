import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex justify-between items-center ">
        <span> {new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Build with <span className="text-red-500">❤</span> by{" "}
          <Link href="https://github.com/ArceDaniel" target={'_blank'} className="underline underline-offset-2">ArceDaniel</Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;