import Head from "next/head";
import _ from "lodash";
import * as React from 'react';

export interface IMishnahProps {
}


export default function Mishnah (props: IMishnahProps) {

console.log(props)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mishnah | How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Pick your mishnah verses</h1>

      </main>
      </div>
  );
}
