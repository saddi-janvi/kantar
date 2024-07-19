"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import type { NextPage } from "next";
import Portfolio from "@/pages/portfolio";
import Image from "next/image";
import kantarLogo from "/public/kantar.jpg";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex row items-between justify-items-center pl-10 py-10 absolute left-0 top-0 ">
        <p className="mr-5 text-xl font-serif text-black text-center">
          <a
            href="https://drive.google.com/file/d/1ehq3DmyIGEZ5CHuFBrDoCpDW35rn9kK1/view?usp=sharing"
            className="text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </p>
        <p className="ml-5 text-xl font-serif text-black text-center">
          <a
            href="https://www.linkedin.com/in/janvi-saddi/"
            className="text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="ml-5 text-xl font-serif text-black text-center">
          <a
            href="https://drive.google.com/file/d/199-gorSkXTxS3UPFmwjtbuy5LiAUqQGJ/view?usp=sharing"
            className="text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research Paper
          </a>
        </p>
      </div>
      <section className=" mx-auto px-4 pt-8">
        <h1 className="text-4xl font-serif font-bold text-black text-center text-accent-color mb-6">
          Welcome to Kantar!
        </h1>
        <p className="text-lg font-serif text-black text-center">
          I’m the &apos;can&apos; in Kantar, turning &apos;can&apos;t&apos; into
          &apos;can&apos; with data magic!
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
              src={kantarLogo}
              alt="Kantar Logo"
              width={100}
              height={20}
              className="image-3d-effect"
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
