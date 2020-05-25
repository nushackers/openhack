import React from "react";
import Link from "next/link";

import { Page } from "../components/Page";
import { Text } from "../components/Text";

const Index = () => (
  <Page>
    <Text className="my-5">
      OpenHack is a new event by NUS Hackers that encourages students to
      contribute to existing open-source projects and / or create new (and fun!)
      open-source projects. Non-NUS students are definitely welcome to
      participate in this challenge as well!
    </Text>
    <h2 className="text-xl lg:text-2xl font-black">Event Details</h2>
    <Text className="mt-5 mb-2">
      From 18th May to 1st July, complete any one of the following challenges to
      receive limited-edition prizes:
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
      Completion of any one of the two challenges above will earn you{" "}
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
    <h3 className="lg:text-xl">Contact Us</h3>
    <Text className="my-5">
      Do drop us an email at{" "}
      <a
        target="_blank"
        href="mailto:openhack@nushackers.org"
        rel="noopener noreferrer"
      >
        openhack@nushackers.org
      </a>{" "}
      for any questions. If you want to discuss ideas or require any help, feel
      free to join our community at our{" "}
      <a
        target="_blank"
        href="https://t.me/nushackers_chat"
        rel="noopener noreferrer"
      >
        NUS Hackers Telegram group
      </a>
      .
    </Text>
  </Page>
);

export default Index;
