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



      {/* accordion */}

      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
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
