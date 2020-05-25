import React from "react";
import Link from "next/link";

import { Page } from "../components/Page";
import { Text } from "../components/Text";
import { FAQQuestion } from "../components/FAQQuestion";

const Faq = () => (
  <Page>
    <h2 className="text-xl lg:text-2xl font-black">
      Frequently Asked Questions
    </h2>
    <FAQQuestion
      question="Why are contributions only open to NUS-related open source repositories?"
      answer="This is the first time we are running a challenge like this, so
        we'd like to limit our scope to NUS-related repositories to see
        how it goes. Depending on the response, we might consider expanding the
        scope of the challenge to non-NUS repositories as well for future
        iterations."
    />
    <FAQQuestion
      question="Why is this event open only to students in Singapore?"
      answer="Due to logistical constraints for delivering prizes,
        we can only open the challenge to students in Singapore."
    />
    <FAQQuestion
      question="I am not an NUS student. Can I participate in the challenge?"
      answer={
        <Text>
          Of course! This challenge is not just for NUS students; see the{" "}
          <a href="#eligibility">section in the rules on eligibility</a>.
        </Text>
      }
    />
    <FAQQuestion
      question="I am a postgraduate student. Can I participate in the challenge?"
      answer="Unfortunately, this challenge is not open to postgraduate students."
    />
    <FAQQuestion
      question="Do the projects need to be self-initiated? Can I submit my internship / research / school work?"
      answer="Projects / contributions must be self-initiated. Work done for other commitments will not be accepted."
    />
    <FAQQuestion
      question="I don't know what pull requests (PRs) are? How do I get started?"
      answer={
        <Text>
          Take a look at{" "}
          <Link href="start">
            <a>our Getting Started page here</a>
          </Link>
          .
        </Text>
      }
    />
    <FAQQuestion
      question="I don't have any ideas for my open-source project. How do I get started?"
      answer={
        <Text>
          Take a look at{" "}
          <Link href="start">
            <a>our Getting Started page here</a>
          </Link>
          .
        </Text>
      }
    />
  </Page>
);

export default Faq;
