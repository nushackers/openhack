import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import Card from "../components/Card";
import FAQQuestion from "../components/FAQQuestion";
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
      <h2 className="text-xl font-black">Event Details</h2>
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
        <span className="font-medium">
          1x free limited-edition event completion T-Shirt and some stickers
        </span>
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
        <a href="mailto:openhack@nushackers.org">openhack@nushackers.org</a>, so
        that we can add to the list.
      </Text>
      <h2 className="text-xl font-black">Rules</h2>
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
          and other modules is <span className="font-medium">not</span>{" "}
          acceptable)
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
          other modules is <span className="font-medium">not</span> acceptable)
        </li>
        <li className="ml-5 my-1">
          Project should continue to stay open-source even after the event is
          over
        </li>
      </ul>
      <h2 className="text-xl font-black">Submission</h2>
      <Text className="my-5">
        We will be updating this site with the submission process soon. Stay
        tuned and start contributing now!
      </Text>
      <h2 className="text-xl font-black">FAQs</h2>
      <FAQQuestion
        question="Why are contributions only open to NUS-related open-source repositories?"
        answer="This is the first time we are running a challenge like this, so
        we’d like to limit our scope to NUS-related repositories to see
        how it goes. Depending on the response, we might consider expanding the
        scope of the challenge to non-NUS repositories as well, for future
        iterations."
      />
      <FAQQuestion
        question="Why is this event open only to students in Singapore?"
        answer="Due to logistical constraints for delivering prizes,
        we can only open the challenge to students in Singapore."
      />
      <FAQQuestion
        question="I am not a NUS-student, can I participate in the challenge?"
        answer="Of course! This challenge is open for not just NUS students, see
        the section in the rules on Eligibility."
      />
      <FAQQuestion
        question="I am a postgraduate student, can I participate in the challenge?"
        answer="Unfortunately, this challenge is not open for postgraduate students."
      />
      <FAQQuestion
        question="Do the projects need to be self-initiated? Can I submit my internship / research / school work?"
        answer="Projects / contributions must be self-initiated. Work done for other commitments will not be accepted."
      />
      <FAQQuestion question="I don’t know what Pull Requests (PRs) are? How do I get started?" />
      <Text className="mb-5">
        Do take a look at{" "}
        <a href="https://opensource.guide/how-to-contribute/">this</a> and{" "}
        <a href="https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github">
          this
        </a>
        . If you are still stuck, you can always ask for help on our{" "}
        <a href="https://t.me/nushackers_chat">Telegram chat</a>.
      </Text>
    </Card>
  </Page>
);

export default Index;
