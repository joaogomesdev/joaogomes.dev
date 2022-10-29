import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Me: NextPage = () => {
  return (
    <> 
      <Head>
        <title>joaogomes.dev | Me</title>
        <meta name="description" content="My own peace of the internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-4xl">Me</h1>
      </div>
    </>
  );
};

export default Me;

