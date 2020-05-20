import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import FAQQuestion from "../components/FAQQuestion";
import approvedRepos from "../data/approved.json";

const Start = () => (
  <Page>
    <h2 className="text-xl font-black">Getting Started</h2>
    <Text className="my-5">
      Not sure how to start? Here are some resources that we've collated to help
      you get started!
    </Text>
    <Text className="mb-5">
      Do take a look at{" "}
      <a target="_blank" href="https://opensource.guide/how-to-contribute/">
        this
      </a>{" "}
      and{" "}
      <a
        target="_blank"
        href="https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github"
      >
        this
      </a>
      . If you are still stuck, you can always ask for help on our{" "}
      <a target="_blank" href="https://t.me/nushackers_chat">
        Telegram chat
      </a>
      .
    </Text>
  </Page>
);

export default Start;
