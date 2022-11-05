import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

const Guestbook: NextPage = () => { 
  const { data: sessionData } = useSession();
  
  return (
    <> 
      <Head>
        <title>joaogomes.dev | Guestbook</title>
        <meta name="description" content="My own peace of the internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="">
          
        <div>
            <h1 className="font-bold text-4xl">My Guestbook.</h1>
             {/*  TODO: put a spinner / waiting ...  */}
            <p className="text-lg text-zinc-400 mt-3">This part of <span className="text-yellow-500 font-semibold">joaogomes.dev</span> it's my guestbook, where anyone can leave a message. I'm waiting for yours!</p>
        </div>

        <div className="flex justify-between items-center mt-10">
          {sessionData && <h2 className="text-xl"> Hello <span className="text-violet-500">{sessionData.user?.name}</span>, welcome 🙌</h2> } 
          <button 
            className="md:p-2 border-2 border-violet-500 rounded-lg"
            onClick={sessionData ? () => signOut() : () => signIn()}
          >   {sessionData ? "Leave 👋" : "Authenticate ✌️"}</button>
        </div>
        </div>
        

      </div>
    </>
  );
};

export default Guestbook;

