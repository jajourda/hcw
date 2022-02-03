import * as React from "react";

import { useRouter } from "next/router";
import useSWR from "swr";

import Layout from "../../../components/Layout";
import Loading from "../../../components/Loading";
import Head from "next/head";
import WeeklyReading from "../../../components/WeeklyReading";
import _ from "lodash";

import DisqusComments from "../../../components/DisqusComments";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  // console.log("res");
  // console.log(res);

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export interface IWeeklyReadingPageProps { }

export default function WeeklyReadingPage() {
  // console.log(props);

  const { query } = useRouter();
  const { asPath } = useRouter();
  const { data, error } = useSWR(
    () => query.date && `/api/publicreading/${query.date}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <Layout>
        <Head>
          <title>Public Reading - Weekly Reading | How Church Works</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Loading />
      </Layout>
    );



  return (
    <Layout>
      <Head>
        <title>Public Reading - Weekly Reading | How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeeklyReading reading={data} />
      <DisqusComments url={asPath} identifier={data.date} title={data.date} />
    </Layout>
  );
}
