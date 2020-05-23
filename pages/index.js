import React from "react";
import Link from "next/link";

import { Page } from "../components/Page";
import { Text } from "../components/Text";

const Index = () => (
  <Page>
    <Text className="my-5">
      In light of the disruption of our regular events because of the COVID-19
      situation, we have started OpenHack. OpenHack is a new initiative by NUS
      Hackers that aims to promote the spirit of hacking amongst students,
      encouraging students to contribute to existing open-source projects and/or
      create new (and fun!) open-source projects of your own. Non-NUS students
      are definitely welcome to participate in this challenge as well!
    </Text>
    <h2 className="text-xl font-black">Event Details</h2>
    <Text className="my-5">
      The format of the event is quite straightforward&mdash;from 18th May to
      1st July, complete any one of the following challenges to receive
      limited-edition prizes!
    </Text>
    <Text className="my-2">Challenges:</Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        Make 3 valid pull requests (PRs) that satisfy the{" "}
        <Link href="rules#pr-standards">
          <a>OpenHack Quality Standards</a>
        </Link>{" "}
        to any{" "}
        <Link href="rules#repos">
          <a>NUS-related open source repositories</a>
        </Link>
      </li>
      <li className="ml-5 my-1">
        Create and complete a fun new open source project of your own that
        satisfies the{" "}
        <Link href="rules#proj-standards">
          <a>OpenHack Quality Standards</a>
        </Link>
      </li>
    </ol>
    <h3>Prizes</h3>
    <Text className="mt-5">
      Completion of either one, or both, of the two challenges above will earn
      you{" "}
      <span className="font-medium">
        a free limited-edition event completion T-shirt and stickers
      </span>
      .
    </Text>
  </Page>
);

export default Index;
