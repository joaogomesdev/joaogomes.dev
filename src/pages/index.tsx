import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });∫
  return (
    <> 
      <Head>
        <title>joaogomes.dev</title>
        <meta name="description" content="My own peace of the internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-4xl">Home</h1>
      </div>
    </>
  );
};

export default Home;

