import React from "react";

import { Page } from "../components/Page";
import { Text } from "../components/Text";

const Submit = () => (
  <Page>
    <h2 className="text-xl lg:text-2xl font-black">Submission</h2>
    <Text className="mt-5">
      We will be using GitHub's Issue Tracker to track submissions. By doing so,
      you can also update your submission incrementally (i.e. add PR after PR as
      you complete them) instead of submitting it in one go, so that we can
      quickly provide feedback on your PRs / project if necessary!
    </Text>
    <Text className="mt-5 mb-2">
      To make a submission, navigate to the{" "}
      <a
        target="_blank"
        href="https://github.com/nushackers/openhack-submissions/issues"
        rel="noopener noreferrer"
      >
        {" "}
        OpenHack submission repository's issue tracker{" "}
      </a>
      and follow these instructions:
    </Text>
    <ol className="mb-5 list-decimal">
      <li className="ml-10 my-1">
        Click on the <strong>New Issue</strong> button.
      </li>
      <li className="ml-10 my-1">
        Click on the <strong>Get started</strong> button on the submission
        template.
      </li>
      <li className="ml-10 my-1">Include your GitHub username in the title.</li>
      <li className="ml-10 my-1">
        Fill out the issue template with your submission details.
      </li>
      <li className="ml-10 my-1">
        Note that we are using an issue template, so only edit the portions
        relevant to your submission. You can preview the submission form by
        clicking on the <strong>Preview</strong> tab.
      </li>
      <li className="ml-10 my-1">Make your submission!</li>
    </ol>
    <Text className="mt-5 mb-2">
      Once you have made a submission, someone will review it and get back with
      further instructions!
    </Text>
  </Page>
);

export default Submit;
