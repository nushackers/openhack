import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import Card from "../components/Card";

const Index = () => (
  <Page title="OpenHack - NUS Hackers">
    <Card>
      <h1 className="font-title my-3 text-5xl text-blue-600">OpenHack 2020</h1>
      <Text className="my-3">
        In light of the disruption of our regular events because of the COVID-19
        situation, we have started OpenHack. OpenHack is a new initiative by NUS
        Hackers that aims to promote the spirit of hacking amongst students,
        encouraging students to contribute to existing open-source projects
        and/or create new (and fun!) open-source projects of your own. Non-NUS
        students are definitely welcome to participate in this challenge as
        well!
      </Text>
      <strong>Event Details</strong>
      <Text className="my-3">
        The format of the event is quite straightforward – from 18th May to 1st
        July, complete any one of the following challenges to receive limited
        edition prizes!
      </Text>
    </Card>
  </Page>
);

export default Index;
