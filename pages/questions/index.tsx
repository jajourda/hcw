import * as React from "react";
import Head from "next/head";
import _ from "lodash";
import Layout from "../../components/Layout";
// import useSWR from 'swr'
import QuestionListItem from "../../components/QuestionListItem";
import { QuestioningTheBibleInterfaceProps } from "../../interfaces/questioningthebible";

import { getQuestioningTheBible } from "../api/questioningthebible";

export interface IBibProps {}

export default function Bib(props: any) {
  const sorted = _.sortBy(props.data, function (dateObj) {
    return new Date(dateObj.timestamp);
  }).reverse();
  // console.log("i am sorted");
  // console.log(sorted);
  return (
    <Layout>
      <Head>
        <title>Questions | How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-white p-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-left text-4xl font-bold text-green mb-4">
              Questions
            </p>
            <p className="text-2xl font-light text-gray-400">
              Got any? Ask Yeshua for answers.
            </p>
          </div>

          {/* https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api */}
        </div>

        <div className="container flex flex-col mx-auto w-full items-center justify-center">
          <ul className="flex flex-col">
            {sorted && sorted.length ? (
              sorted.map((q: QuestioningTheBibleInterfaceProps, i: any) => (
                <QuestionListItem key={i} question={q} />
              ))
            ) : (
              <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <h2>it's not here</h2>
              </div>
            )}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  let c = context;
  console.log(c);
  const sheet = await getQuestioningTheBible();
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}
