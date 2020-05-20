import Head from "next/head";
import React from "react";
import Card from "./Card";
import NavBar from "./NavBar";

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>OpenHack - NUS Hackers</title>
        <meta property="og:site_name" content="OpenHack 2020" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="OpenHack is an initiative to promote the spirit
          of hacking amongst students."
        />
      </Head>
      <body>
        <NavBar />
        <main className="">
          <Card>
            <div className="font-title text-center">
              <h1 className="mt-5 text-4xl md:text-5xl text-indigo-700">
                OpenHack 2020
              </h1>
              <div className="mb-5 text-md md:text-lg">
                by{" "}
                <a
                  className="text-black"
                  target="_blank"
                  href="https://nushackers.org"
                >
                  NUS Hackers
                </a>
              </div>
            </div>
            {children}
          </Card>
        </main>
      </body>
    </>
  );
};

export default Page;
