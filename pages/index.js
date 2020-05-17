import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import Card from "../components/Card";
import approvedRepos from "../data/approved.json";

const Index = () => (
  <Page title="OpenHack - NUS Hackers">
    <Card>
      <h1 className="font-title my-5 text-5xl text-blue-800">OpenHack 2020</h1>
      <Text className="my-5">
        In light of the disruption of our regular events because of the COVID-19
        situation, we have started OpenHack. OpenHack is a new initiative by NUS
        Hackers that aims to promote the spirit of hacking amongst students,
        encouraging students to contribute to existing open-source projects
        and/or create new (and fun!) open-source projects of your own. Non-NUS
        students are definitely welcome to participate in this challenge as
        well!
      </Text>
      <h2 className="text-lg font-bold">Event Details</h2>
      <Text className="my-5">
        The format of the event is quite straightforward – from 18th May to 1st
        July, complete any one of the following challenges to receive
        limited-edition prizes!
      </Text>
      <Text className="my-2">Challenges:</Text>
      <ol className="mb-5">
        <li className="ml-5 my-1">
          Make 3 valid Pull Requests (PRs) that satisfy the OpenHack Quality
          Standards to any NUS-related Open Source Repositories
        </li>
        <li className="ml-5 my-1">
          Create and complete a fun new open source project of your own that
          satisfies the OpenHack Quality Standards
        </li>
      </ol>
      <h3>Prizes</h3>
      <Text className="my-5">
        Completion of ANY of the two challenges above will earn you{" "}
        <strong>
          1x free limited-edition event completion T-Shirt and some stickers
        </strong>
        .
      </Text>
      <h3>Approved NUS-related Repositories:</h3>
      <ul className="my-3">
        {approvedRepos.repos.map((repo) => (
          <li className="ml-5">
            {repo.name} &mdash; <a href={repo.url}>{repo.url}</a>
          </li>
        ))}
      </ul>
      <Text className="my-5">
        This is not an exhaustive list of allowed repositories and we are still
        building this list up along the way. If you want to contribute to any
        other NUS-related repositories, feel free to do so and write to us at{" "}
        <a href="mailto:openhack@nushackers.org">openhack@nushackers.org</a> for
        us to add to the list.
      </Text>
      <h2 className="text-lg font-bold">Rules</h2>
      <Text className="my-5">
        In the spirit of hacking, we’re keeping requirements to a minimum – any
        project that satisfies the quality standards is eligible for the prize.
        We are hoping that this encourages students (especially beginners) to
        build their own projects and share it with the community!
      </Text>

      <h3>Eligibility</h3>
      <Text className="mt-5 mb-2">This event is open to:</Text>
      <ol className="mb-5">
        <li className="ml-5 my-1">
          Students in ANY educational institution in Singapore, anywhere from
          primary school to undergraduate studies
        </li>
        <li className="ml-5 my-1">
          Anyone awaiting entry into an educational institution in Singapore
          (from primary school to undergraduate studies)
        </li>
        <li className="ml-5 my-1">Full-time National Servicemen (NSFs)</li>
      </ol>

      <h3>Quality Standards</h3>
      <Text className="mt-5 mb-2">
        Valid PRs must meet the following criteria:
      </Text>
      <ul className="mb-5">
        <li className="ml-5 my-1">
          Has to be non-trivial (i.e. more than typo fixes or small
          documentation changes)
        </li>
        <li className="ml-5 my-1">
          Only pull requests made on the list of approved repositories are
          counted
        </li>
        <li className="ml-5 my-1">
          Work should be self-initiated, and you cannot submit your
          coursework/homework (e.g. - work done for Orbital, CS2103, CS3281/82
          and other modules is <strong>not</strong> acceptable)
        </li>
      </ul>

      <Text className="mt-5 mb-2">
        Valid self-initiated open-source projects must meet the following
        criteria:
      </Text>
      <ul className="mb-5">
        <li className="ml-5 my-1">
          Project should be new and original, and not have come from any
          previous work (Inspiration from previous works is okay, but plagiarism
          is not)
        </li>
        <li className="ml-5 my-1">
          Software frameworks / libraries built by others are allowed
        </li>
        <li className="ml-5 my-1">
          For ideas on what a project should look like, you can check out{" "}
          <a href="https://hacknroll2020.devpost.com/submissions">
            submissions for Hack&Roll 2020
          </a>{" "}
          (the rule of thumb is this: if your project shows some effort we will
          consider it as substantial)
        </li>
        <li className="ml-5 my-1">Project must be functional</li>
        <li className="ml-5 my-1">
          Creation of the project repository should be after the launch of
          OpenHack
        </li>
        <li className="ml-5 my-1">
          Hardware hacks &mdash; you can upload your schematics, CAD files and
          the like. A video of the working project would be great!
        </li>
        <li className="ml-5 my-1">
          Project should be self-initiated, and you cannot submit your work for
          other commitments (e.g. - work done for Orbital, CS2103, CS3281/82 and
          other modules is <strong>not</strong> acceptable)
        </li>
        <li className="ml-5 my-1">
          Project should continue to stay open-source even after the event is
          over
        </li>
      </ul>
    </Card>
  </Page>
);

export default Index;
