import React from "react";
import Link from "next/link";

import { Page } from "../components/Page";
import { Text } from "../components/Text";

const Index = () => (
  <Page>
    <p>
      <time>18th May</time> to <time>1 July</time>
    </p>
    <p>
      Start contributing to open-source projects or create new (and fun!)
      open-source projects. <span>Non-NUS students welcome!</span>
    </p>
    <h3 className="lg:text-xl">Why contribute?</h3>
    <ol className="list-disc pl-5 mb-5">
      <li className="ml-5 my-1">Help fellow student developers</li>
      <li className="ml-5 my-1">
        Build and fix things that have meaningful, real impact on people's lives
      </li>
      <li className="ml-5 my-1">
        Build public artifacts that help you grow a reputation (and a career)
      </li>
    </ol>
    <h3 className="lg:text-xl">I'm in! What do I do?</h3>
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
    <h3 className="lg:text-xl">More Information</h3>
    <Text className="my-5">
      You can read the rules of the challenge{" "}
      <Link href="/rules">
        <a>here</a>
      </Link>
      . We also have a FAQ section{" "}
      <Link href="/faq">
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
      Email us at{" "}
      <a
        target="_blank"
        href="mailto:openhack@nushackers.org"
        rel="noopener noreferrer"
      >
        openhack@nushackers.org
      </a>{" "}
      , or join our{" "}
      <a
        target="_blank"
        href="https://t.me/nushackers_chat"
        rel="noopener noreferrer"
      >
        NUS Hackers Telegram group
      </a>{" "}
      to discuss ideas or to get help. Or just lurk and absorb the ideas, we
      don't mind too.
    </Text>
  </Page>
);

export default Index;
