import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';

const Me: NextPage = () => {
  return (
    <>
      <Head>
        <title>joaogomes.dev | Me</title>
        <meta name="description" content="My own peace of the internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="about" className="scroll-smooth w-screen 3xs:max-w-2lg md:max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center sm:items-start gap-10 md:gap-0">
          <div className="flex flex-col gap-4 self-start">
            <h1 className="font-bold text-4xl">About me.</h1>
            <div className="flex flex-col gap-4 3xs:max-w-sm md:max-w-md">
            <p className="text-zinc-500 font-mono">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <p className="text-zinc-500 font-mono">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <p className="text-zinc-500 font-mono">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <p className="text-zinc-500 font-mono">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <p className="text-zinc-500 font-mono">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            </div>
          </div>
          
          <div>

          <Image
            src="/me.png"
            alt="Me"
            layout="fixed"
            width={345}
            height={490}
            className="rounded-3xl 3xl:mr-2 md:mr-0"
          />
          </div>
        </div>
        <div className="flex ">

        <div className="mt-20 flex flex-col md:flex-row justify-between gap-8 md:gap-0 w-full items-center md:items-start">
            <div className="max-w-lg flex flex-col gap-4 ">
              <h1 className="font-bold text-4xl">Bio.</h1>
              <p className="text-zinc-500 text-xl">
                Enthusiastic about Web / Mobile development
              </p>
              <p className="text-zinc-500 text-xl">
                Lets share knowledge to create a better world 🌍
              </p>
            </div>

            <div>

                <Image
                  src="/memoji.png"
                  alt="MeMoji"
                  width={141}
                  height={208}
                  />
            </div>
          </div>
              </div>



        <div className="mt-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Professional path.</h1>
            <p className="text-zinc-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>

            <div className="mt-10 flex flex-col gap-8 items-start">

              <div className="gap-1">
                <p className="text-2xl font-bold text-blue-500">🏨 Fullstack Web Developer</p>
                <div className="text-lg">
                  <a href="https://noniussolutions.com/" className="underline underline-offset-4" target="blank">Nonius Software</a>
                  <span> • </span>
                  Maia , Portugal 🇵🇹
                </div>
                <div className="mt-1">
                  Mar to Jul <span>  •  </span> 2022
                </div>
              </div>

              <div className="gap-1">
                <p className="text-2xl font-bold text-yellow-500">🪪  Web Developer - Internship</p>
                <div className="text-lg">
                  <a href="https://www.sorema.pt" className="underline underline-offset-4" target="blank">Unizon</a>
                  <span> • </span>
                  Remote | Porto, Portugal 🇵🇹
                </div>
                <div className="mt-1">
                  Mar to Jul <span>  •  </span> 2022
                </div>
              </div>
              <div className="gap-1">
                <p className="text-2xl font-bold text-violet-500">🌐 Web Developer -Internship</p>
                <div className="text-lg">
                  <a href="https://www.wecreateyou.pt" className="underline underline-offset-4" target="blank">WeCreateYou</a>
                  <span> • </span>
                  São Felix da Marinha, Portugal 🇵🇹
                </div>
                <div className="mt-1">
                  Mar to Jul <span>  •  </span> 2020
                </div>
              </div>
              <div className="gap-1">
                <p className="text-2xl font-bold text-red-500">🏭 Techical Support - Internship</p>
                <div className="text-lg">
                  <a href="https://www.sorema.pt" className="underline underline-offset-4" target="blank">Sorema</a>
                  <span> • </span>
                  Espinho, Portugal 🇵🇹
                </div>
                <div className="mt-1">
                  Mar to Jul <span>  •  </span> 2019
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between items-end w-full">

          <Link href="#about">
            <span className="border-2 border-indigo-500 p-4 rounded-full cursor-pointer hidden sm:inline-flex">
              <AiOutlineArrowUp size={28} className="text-[#FBAE95]" />
            </span>
          </Link>

          <div className="flex justify-center items-center gap-2">
            <Link href="/me/what-i-use">
              <h1 className="text-4xl hover-underline-animation  after:bg-gray-800 after:dark:bg-white cursor-pointer ">What i use.</h1>
            </Link>
            <Link href="/me/what-i-use">
              <span className="border-2 border-indigo-500 p-3 rounded-full cursor-pointer">
                <AiOutlineArrowRight size={24} className="text-[#FBAE95]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;

