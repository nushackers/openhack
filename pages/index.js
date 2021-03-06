import React from "react";
import Link from "next/link";

import { Page } from "../components/Page";
import { Text } from "../components/Text";

const Index = () => (
  <Page>
    <Text className="my-5">
      OpenHack is a new event by NUS Hackers that encourages students to{" "}
      <span className="font-medium">
        start contributing to open-source projects or create new (and fun!)
        open-source projects
      </span>
      . Non-NUS students are definitely welcome to participate in this challenge
      as well!
    </Text>
    <Text className="text-red-700 my-5 text-center">
      <span className="font-medium">UPDATE: </span>
      The deadline for submission has now been extended to 15<sup>th</sup>{" "}
      August! All the best!
    </Text>
    <h3 className="lg:text-xl">Why should I contribute to open-source?</h3>
    <Text className="mt-5 mb-2">
      Contributing to open-source will allow you to:
    </Text>
    <ol className="list-disc pl-5 mb-5">
      <li className="ml-5 my-1">Help your fellow student developers</li>
      <li className="ml-5 my-1">
        Build and fix things that have meaningful, real impact on people's lives
      </li>
      <li className="ml-5 my-1">
        Build public artifacts that help you grow a reputation (and a career)
      </li>
    </ol>
    <h3 className="lg:text-xl">I'm in! What do I do?</h3>
    <Text className="mt-5 mb-2">
      From now till 15<sup>th</sup> August, complete any one of the following
      challenges to receive limited-edition prizes:
    </Text>
    <ol className="list-disc pl-5 mb-5">
      <li className="ml-5 my-1">
        Make 3 valid pull requests (PRs) that satisfy the{" "}
        <Link href="rules#pr-standards">
          <a>PR standards</a>
        </Link>{" "}
        to any{" "}
        <Link href="rules#repos">
          <a>NUS-related open source repositories</a>
        </Link>{" "}
        or;
      </li>
      <li className="ml-5 my-1">
        Create and complete a fun new open source project of your own that
        satisfies the{" "}
        <Link href="rules#proj-standards">
          <a>project standards</a>
        </Link>
      </li>
    </ol>
    <h3 className="lg:text-xl">Prizes</h3>
    <Text className="my-5">
      Be one of the first 50 people to complete any one of the two challenges
      above, and you will get{" "}
      <span className="font-medium">
        a free limited-edition event completion T-shirt and stickers
      </span>
      .
    </Text>
    <h3 className="lg:text-xl">Need more information?</h3>
    <Text className="my-5">
      You can read the rules of the challenge{" "}
      <Link href="/rules">
        <a>here</a>
      </Link>
      . We also have a FAQ section{" "}
      <Link href="/rules#faq">
        <a>here</a>
      </Link>
      . If you are not sure how to start, do look at our{" "}
      <Link href="/start">
        <a>Getting Started guide</a>
      </Link>
      .
    </Text>
    <h3 className="lg:text-xl">Join our community!</h3>
    <Text className="my-5">
      We have an{" "}
      <a
        target="_blank"
        href="https://t.me/nushackers_openhack"
        rel="noopener noreferrer"
      >
        OpenHack Telegram group
      </a>{" "}
      for people who are trying to complete the challenge as well. Do join us to
      discuss ideas or to get help! Or just lurk and absorb the ideas, we don't
      mind too!
    </Text>
  </Page>
);

export default Index;
