import type { GetServerSideProps, NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

import { prisma } from '../server/db/client'

export const getServerSideProps :  GetServerSideProps = async ({ req }) => {
  const data = await prisma.user.findMany()
  return { props: { data } }
}


const Guestbook: NextPage = (data) => { 
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
            <p className="text-lg text-zinc-400 mt-3">This part of <span className="text-yellow-500 font-semibold">joaogomes.dev</span> is my guestbook, where anyone can leave a message. Im waiting for yours!</p>
        </div>

        <div className="flex flex-col xs:flex-row justify-between items-center mt-10">
          {sessionData && <h2 className="text-xl"> Hello <span className="text-violet-500">{sessionData.user?.name}</span>, welcome.</h2> } 
          <button 
            className="py-2 w-full xs:w-auto mt-8 xs:px-2 xs:mt-0 border-2 border-violet-500 rounded-lg cursor-pointer"
            onClick={sessionData ? () => signOut() : () => signIn()}
          >   {sessionData ? "Leave 👋" : "Authenticate ✌️"}</button>
        </div>


        <pre>{data && JSON.stringify(data, null,2)}</pre>
        </div>
        

      </div>
    </>
  );
};

export default Guestbook;

