import React from "react";
import Link from "next/link";

import { Page } from "../components/Page";
import { Text } from "../components/Text";
import { FAQQuestion } from "../components/FAQQuestion";

import approvedRepos from "../data/approved.json";

const Rules = () => (
  <Page>
    <h2 className="text-xl lg:text-2xl font-black">Rules</h2>
    <Text id="eligibility" className="my-5">
      In the spirit of hacking, we're keeping requirements to a
      minimum&mdash;any project that satisfies the quality standards is eligible
      for the prize. We are hoping that this encourages students (especially
      beginners) to build their own projects and share it with the community!
    </Text>
    <h3 className="lg:text-xl">Eligibility</h3>
    <Text className="mt-5 mb-2">This event is open to:</Text>
    <ol className="list-decimal pl-5 mb-5">
      <li className="ml-5 my-1">
        Students in ANY educational institution in Singapore, anywhere from
        primary school to undergraduate studies
      </li>
      <li id="repos" className="ml-5 my-1">
        Anyone awaiting entry into an educational institution in Singapore (from
        primary school to undergraduate studies)
      </li>
      <li className="ml-5 my-1">Full-time National Servicemen (NSFs)</li>
    </ol>
    <h3 className="lg:text-xl">Approved NUS-related repositories</h3>
    <ul className="list-disc pl-5 my-3">
      {approvedRepos.repos.map((repo) => (
        <li key={repo.url} className="ml-5">
          <a target="_blank" href={repo.url} rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
    <Text id="pr-standards" className="my-5">
      This is not an exhaustive list of allowed repositories and we are still
      building up this list. If you want to contribute to any other NUS-related
      repositories, feel free to do so and write to us at{" "}
      <a
        target="_blank"
        href="mailto:openhack@nushackers.org"
        rel="noopener noreferrer"
      >
        openhack@nushackers.org
      </a>
      , so that we can add to the list.
    </Text>
    <h3 className="lg:text-xl">Quality Standards</h3>
    <Text className="mt-5 mb-2">
      Valid PRs must meet the following criteria:
    </Text>
    <ul className="list-disc pl-5 mb-5">
      <li className="ml-5 my-1">
        Has to be non-trivial (i.e. more than typo fixes or small documentation
        changes)
      </li>
      <li id="proj-standards" className="ml-5 my-1">
        Only pull requests made on the{" "}
        <a href="#repos">list of approved repositories</a> are counted
      </li>
      <li className="ml-5 my-1">
        Work should be self-initiated, and you cannot submit your internship
        work or coursework/homework (e.g. work done for Orbital, CS2103,
        CS3281/82 and other modules is <span className="font-medium">not</span>{" "}
        acceptable)
      </li>
    </ul>
    <Text className="mt-5 mb-2">
      Valid self-initiated open-source projects must meet the following
      criteria:
    </Text>
    <ul className="list-disc pl-5 mb-5">
      <li className="ml-5 my-1">
        Project should be new and original, and not have come from any previous
        work (inspiration from previous works is okay, but plagiarism is not)
      </li>
      <li className="ml-5 my-1">
        Usage of software frameworks / libraries built by others are allowed
      </li>
      <li className="ml-5 my-1">Project must be functional</li>
      <li className="ml-5 my-1">
        Creation of the project repository must be after the launch of OpenHack
      </li>
      <li className="ml-5 my-1">
        Hardware hacks &mdash; you can upload your schematics, CAD files and the
        like. A video of the working project would be great!
      </li>
      <li className="ml-5 my-1">
        For ideas on what a project should look like, you can check out{" "}
        <a
          target="_blank"
          href="https://hacknroll2020.devpost.com/submissions"
          rel="noopener noreferrer"
        >
          submissions for Hack&amp;Roll 2020
        </a>{" "}
        (the rule of thumb is this: if your project shows effort we will
        consider it as substantial)
      </li>
      <li id="faq" className="ml-5 my-1">
        Project must continue to stay open-source even after the event is over
      </li>
      <li className="ml-5 my-1">
        Project must be self-initiated, and you cannot submit your work for
        other commitments (e.g. work done for Orbital, CS2103, CS3281/82 and
        other modules is <span className="font-medium">not</span> acceptable)
      </li>
    </ul>
  </Page>
);

export default Rules;
