import Head from "next/head";
import _ from "lodash";
import * as React from "react";

export interface IHomeProps { }
export default function Home() {
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
