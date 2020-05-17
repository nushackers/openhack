import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import Card from "../components/Card";
import approvedRepos from "../data/approved.json";

const Index = () => (
  <Page title="OpenHack - NUS Hackers">
    <Card>
      <h1 className="font-title my-3 text-5xl text-blue-800">OpenHack 2020</h1>
      <Text className="my-3">
        In light of the disruption of our regular events because of the COVID-19
        situation, we have started OpenHack. OpenHack is a new initiative by NUS
        Hackers that aims to promote the spirit of hacking amongst students,
        encouraging students to contribute to existing open-source projects
        and/or create new (and fun!) open-source projects of your own. Non-NUS
        students are definitely welcome to participate in this challenge as
        well!
      </Text>
      <h6>Event Details</h6>
      <Text className="my-3">
        The format of the event is quite straightforward – from 18th May to 1st
        July, complete any one of the following challenges to receive
        limited-edition prizes!
      </Text>
      <Text className="my-3">Challenges:</Text>
      <ol>
        <li className="ml-5 my-2">
          Make 3 valid Pull Requests (PRs) that satisfy the OpenHack Quality
          Standards to any NUS-related Open Source Repositories
        </li>
        <li className="ml-5 my-2">
          Create and complete a fun new open source project of your own that
          satisfies the OpenHack Quality Standards
        </li>
      </ol>
      <h6>Prizes</h6>
      <Text className="my-3">
        Completion of ANY of the two challenges above will earn you{" "}
        <strong>
          1x free limited-edition event completion T-Shirt and some stickers
        </strong>
        .
      </Text>
      <h6>Approved NUS-related Repositories:</h6>
      <ul>
        {approvedRepos.repos.map((repo) => (
          <li className="ml-5">
            <a href={repo.url}>
              {repo.name} &mdash; {repo.url}
            </a>
          </li>
        ))}
      </ul>
      <Text className="my-3">
        This is not an exhaustive list of allowed repositories and we are still
        building this list up along the way. If you want to contribute to any
        other NUS-related repositories, feel free to do so too but write to us
        at <a href="mailto:openhack@nushackers.org">openhack@nushackers.org</a>{" "}
        for us to add to the list.
      </Text>
    </Card>
  </Page>
);

export default Index;
