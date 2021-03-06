import * as React from "react";

import { useRouter } from "next/router";
import useSWR from "swr";
import BibVideoPost from "../../components/BibVideoPost";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Head from "next/head";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log("res");
  console.log(res);

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export interface IBibVideoPageProps {}

export default function BibVideoPage() {
  // console.log(props);

  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.youtube && `/api/bib/${query.youtube}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <Layout>
        <Head>
          <title>Bible-in-Bits | How Church Works</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Loading/>
      </Layout>
    );

  return (
    <Layout>
      <Head>
        <title>Bible-in-Bits | How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BibVideoPost video={data} />
    </Layout>
  );
}
