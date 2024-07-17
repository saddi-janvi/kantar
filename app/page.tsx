"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import type { NextPage } from "next";
import Portfolio from "@/pages/portfolio";
import Image from "next/image";
import disneyLogo from "/public/disney-logo.png";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex row pl-10 py-10 absolute left-0 top-0 ">
        <p className="mr-5 text-xl font-serif text-black text-center">
          <a
            href="https://drive.google.com/file/d/1-H1M8pVhpSCPWpezfKwt7j0-PDXEevHO/view?usp=sharing"
            className="text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </p>
        <p className="ml-5 text-xl font-serif text-black text-center">
          <a
            href="https://www.linkedin.com/in/batul07/"
            className="text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <section className=" mx-auto px-4 pt-8">
        <h1 className="text-4xl font-serif font-bold text-black text-center text-accent-color mb-6">
          Batul in Disneyland!
        </h1>
        <p className="text-lg font-serif text-black text-center">
          A dash of Disney magic and a sprinkle of data savvy: that&apos;s me!
        </p>
      </section>
      <div className="text-black">
        <div className="p-4 w-5/6">
          <Portfolio />
        </div>
        <div className=" fixed right-0 top-0 h-full">
          <section className="flex justify-end items-center py-8 px-4 mr-10">
            {}
            <Image
              src={disneyLogo}
              alt="Disney Logo"
              width={150}
              height={60}
              layout="fixed"
            />
          </section>
          {}
          <Scene />
        </div>
      </div>
    </>
  );
};

export default Home;
