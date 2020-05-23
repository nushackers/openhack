import React from "react";
import Head from "next/head";

import { Card } from "./Card";
import { NavBar } from "./NavBar";

export const Page = ({ title, children }) => {
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

      <NavBar />

      <main className="pt-12">
        <Card>
          <div className="font-title text-center mb-5">
            <h1 className="text-4xl md:text-5xl text-indigo-700">
              OpenHack 2020
            </h1>
            <span className="text-md md:text-lg">
              by{" "}
              <a
                target="_blank"
                href="https://nushackers.org"
                rel="noopener noreferrer"
              >
                NUS Hackers
              </a>
            </span>
          </div>

          {children}
        </Card>
      </main>
    </>
  );
};
