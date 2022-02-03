import { NextPage } from "next";
import Head from "next/head";
import Hero from "@components/Hero";
import Introduction from "@components/Introduction";

const index: NextPage = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Roboto:wght@400;500;700&family=Rock+Salt&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Hero />
    <Introduction />
  </>
);
export default index;
