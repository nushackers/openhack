import Head from "next/head";
import React from "react";

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content="OpenHack 2020" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="OpenHack is an initiative to promote the spirit
          of hacking amongst students."
        />
      </Head>
      <main className="">{children}</main>
    </>
  );
};

export default Page;
