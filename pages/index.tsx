import Head from "next/head";
import _ from "lodash";
import * as React from "react";
import { getDataFromSheets } from "./api/sheets";


export default function Home(props: any) {
  console.log(props)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue" href="https://nextjs.org">
            How Church Works!
          </a>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full p-6 mt-6 text-left border w-96 rounded-xl">
          <h2 className="text-2xl">Coming Soon...</h2>
          <ul>
            {props.data && props.data.length ? (
              props.data.map((item: any) => (
                <li key={item.title}>
                  {item.title} - {item.description}
                </li>
              ))
            ) : (
              <li>Error: do not forget to setup your env variables 👇</li>
            )}
          </ul>
          <a
            href="http://sonbuildmea.house"
            className="p-6 mt-6 text-center border bg-green text-white w-96 rounded-xl hover:text-black focus:text-black"
          >
            <h3 className="text-3xl font-bold bg-bluen">Old Website &rarr;</h3>
            {/* <p className="mt-4 text-xl">
              some old items that will hopefully be reworked soon
            </p> */}
          </a>

        </div>




      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSU2P3VVbKEkoCPaJQG9i27gF2Ou1fIzqne3Cl-=s176-c-k-c0x00ffffff-no-rj"
            alt="Vercel Logo"
            className="footer-link"
          />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps(context: any) {
  let c = context;
  console.log(c)
  const sheet = await getDataFromSheets();
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}