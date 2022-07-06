import * as React from "react";
import Head from "next/head";
import _ from "lodash";
import { isSaturday, isFuture } from "date-fns";
import { isSameDay } from "date-fns";
import Layout from "../../components/Layout";
// import useSWR from 'swr'
import PublicReadingListItem from "../../components/PublicReadingListItem";
import { PublicReadingInterfaceProps } from "../../interfaces/publicreading";
import ColoredBgSection from "../../components/ColoredBgSection";

import { getPublicReading } from "../api/publicreading";
import SingleReadingCard from "../../components/SingleReadingCard";

export interface IBibProps {
  readings: PublicReadingInterfaceProps[];
}

export default function PublicReading(props: any) {
  //logic
  //todo - find and store only present and future dates in readings
  const listReadings = props.readings;

  //todo - create an array that stores all future readings inside of it
  const futureReadings = _.filter(props.readings, function (item) {
    // console.log('i am item:')
    // console.log(item)
    let rDate = isFuture(new Date(item.date));
    if (rDate === true) {
      // console.log('i am true')
      return item;
    } else {
      // console.log('i am false')
    }
  });

  //todo- capturetoday and store in the variable `today`
  const today = new Date();
  //const today = new Date("7/10/2021");
  //todo -run conditional if statement
  let upcomingSaturday;

  if (!isSaturday(today)) {
    upcomingSaturday = futureReadings[0];
  } else {
    upcomingSaturday = _.filter(props.readings, function (item) {
      return isSameDay(today, new Date(item.date));
    })[0];
  }

  //   console.log('i am props')
  //   console.log(props.readings)
  console.log(upcomingSaturday);
  //   console.log('i am listReadings@@@@@@@@@@')
  //   console.log(listReadings)

  return (
    <Layout>
      <Head>
        <title>Public Reading | How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col sm:flex-row gap-10 p-12">
        <div className="intro order-2 sm:order-1 sm:w-1/2 ">
          <div className=" flex flex-col relative z-20 mr-20 text-left">
            <span className="w-20 h-2 bg-black  mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl text-black flex flex-col leading-none  text-gray-800">
              Weekly
              <span className="text-5xl text-green sm:text-6xl">
                Public Reading
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 ">
              Join in for the public reading of Scripture! Gather with the
              people of God for instruction, upbuilding, and the equipping from
              the Spirit of Yeshua.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-green border-2 border-transparent text-white text-md mr-4 hover:bg-green"
              >
                Get started
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-green text-green  hover:bg-green hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="reading-card sm:w-1/2 order-1 sm:order-2 ">
          <div className=" relative">
            <SingleReadingCard reading={upcomingSaturday} />
          </div>
        </div>
      </div>



      <ColoredBgSection
        color="green"
        lead="Septennial Reading List"
        leadRef={upcomingSaturday.date}
        col1Big={upcomingSaturday.torahPassage}
        col2Big={upcomingSaturday.gospelPassage}
        col3Big={upcomingSaturday.torahTitle}
        col1Small="TORAH"
        col2Small="GOSPEL"
        col3Small="Torah Title"
      />

      <div className="container mx-auto py-10 flex justify-center h-screen">
        <div className="  h-full flex flex-col">
          <div
            className="
        bg-white
        text-6xl
        text-green
        font-bold
        px-5
        py-2
        shadow
        border-b border-gray-300
      "
          >
            <div className="text-7xl uppercase text-black">Septennial</div>
            Reading List
          </div>

          <div
            className="w-full h-full overflow-auto shadow bg-white"
            id="journal-scroll"
          >
            <table className="w-full">
              <tbody className="">
                {listReadings && listReadings.length ? (
                  listReadings.map((r: PublicReadingInterfaceProps, i: any) => (
                    <PublicReadingListItem key={i} reading={r} />
                  ))
                ) : (
                  <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <h2>it's not here</h2>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  let c = context;
  console.log(c);
  const sheet = await getPublicReading();
  return {
    props: {
      readings: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}
