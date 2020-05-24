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
          content="OpenHack is a new event by NUS Hackers to promote the spirit
          of hacking amongst students, by encouraging contribution to
          open-source and starting new open-source projects."
        />
      </Head>

      <NavBar />

      <main className="pt-12 lg:pt-16 text-base lg:text-lg">
        <Card>
          <div className="font-title text-center mb-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-indigo-700">
              OpenHack 2020
            </h1>
            <span className="text-md md:text-lg lg:text-2xl">
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
