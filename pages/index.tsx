import Head from "next/head";
import _ from "lodash";
import * as React from "react";
import { getDataFromSheets } from "./api/sheets";
import Layout from "../components/Layout";


export default function Home(props: any) {
  console.log(props)
  return (
    <Layout>
      <Head>
        <title>How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
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




    

     
    </Layout>
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