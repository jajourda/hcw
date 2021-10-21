import Head from "next/head";
import _ from "lodash";
import * as React from 'react';
import Layout from "../components/Layout";

export interface IMishnahProps {
}


export default function Mishnah (props: IMishnahProps) {

console.log(props)
  return (
    <Layout>
      <Head>
        <title>Mishnah | How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold">Pick your mishnah verses!</h1>
      </Layout>
  );
}
