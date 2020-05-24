import React from "react";

import { Page } from "../components/Page";
import { Text } from "../components/Text";

const Submit = () => (
  <Page>
    <h2 className="text-xl lg:text-2xl font-black">Submission</h2>
    <Text className="mt-5">
      We will be using Github Issues to track submissions. Not only does it help
      us maintain all the submissions centrally, but it also helps you maintain
      permalinks to the work you did for OpenHack. You can also update your
      submission incrementally instead of submitting it in one go, so we can
      keep providing feedback on your PRs/project if necessary!
    </Text>
    <Text className="mt-5 mb-2">
      To make a submission, navigate to the{" "}
      <a target="_blank" href="#" rel="noopener noreferrer">
        {" "}
        OpenHack submission repository{" "}
      </a>
      and follow these instructions:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        Click at the <strong>Issues</strong> tab at the top, and then click the{" "}
        <strong>New Issue</strong> button. Alternatively, you can click{" "}
        <a href="#"></a>.
      </li>
      <li className="ml-5 my-1">
        Get started with the <strong>Submissions</strong> option.
      </li>
      <li className="ml-5 my-1">
        Submit your challenge details in the issue submission form. Change the
        issue title to your name.
      </li>
      <li className="ml-5 my-1">
        Note that we are using an issue template, so only edit the portions
        relevant to your submission. You can preview the submission form by
        click on the <strong>Preview</strong> tab.
      </li>
    </ol>
    <Text className="mt-5 mb-2">
      Once you have made a submission, someone will review it and get back with
      further instructions!
    </Text>
  </Page>
);

export default Submit;
