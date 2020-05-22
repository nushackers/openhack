import React from "react";

import Page from "../components/Page";
import Text from "../components/Text";

const Start = () => (
  <Page>
    <h2 className="text-xl font-black">Getting Started</h2>
    <Text className="my-5">
      Not sure how to start? Fret not! Even those who are contributing actively
      in the open source community were once in your position. In this section,
      we will help you to get started to work on open source projects.
    </Text>

    <br />
    <h3>Using Git</h3>
    <br />
    <Text className="mb-5">
      Open source projects are typically maintained using git and made available
      online through git hosting services (e.g., GitHub, GitLab, and BitBucket).
      Before you start contributing to existing projects or even building your
      own projects, it would be wise to understand how people collaborate using
      git.
    </Text>
    <Text className="mb-5">
      The following are some of the online resources that can help you to
      understand how to use git:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/"
        >
          An introduction to Git: what it is, and how to use it
        </a>
      </li>
      <li className="ml-5 my-1">
        <a target="_blank" href="https://orb2020-git.github.io/">
          Introduction to Git - Orbital 2020
        </a>
      </li>
    </ol>

    <br />
    <h3>How to Contribute</h3>
    <br />
    <Text className="mb-5">
      To contribute toward an open source project, the following are typically
      some of the steps that you may need to go through:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        Find the project of your interest and look at how you could contribute
      </li>
      <li className="ml-5 my-1">
        Open an issue that explains what you want to improve (e.g., bug report,
        feature request, clean-up request, etc.), because the problem that you
        see may not occur as a problem for other people (remember those memes
        saying "it's not a bug, it's a feature").
      </li>
      <li className="ml-5 my-1">
        Once it is confirmed, offer your help and ask for the guide from those
        who are more experienced in the project on how you can make changes.
        Each project usually has its own styles and design pattern, you may need
        to adhere to them in order to avoid introducing a lot of breaking
        changes.
      </li>
      <li className="ml-5 my-1">
        Fork the repository and create a branch for you to implement your code.
      </li>
      <li className="ml-5 my-1">
        Keep your code human-readable and commit step-by-step. Make sure that
        people who will review your code can easily understand your
        implementation.
      </li>
      <li className="ml-5 my-1">
        Submit a PR (Pull request) to the project repository and ask for review
        from those who have write access in the repository (usually the active
        contributors).
      </li>
    </ol>
    <br />
    <Text>
      Since open source projects vary in terms of the tech stack and concepts
      that you need to understand before being able to contribute, the best
      guide is probably to read their documentation directly.
    </Text>
    <br />
    <Text>
      The following are some of the resources that can help you to understand
      how to contribute to open source projects:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        <a target="_blank" href="https://opensource.guide/how-to-contribute/">
          How to Contribute
        </a>
      </li>
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github"
        >
          How to Create Pull Request
        </a>
      </li>
    </ol>

    <br />
    <h3>Start Your Own Project</h3>
    <br />
    <Text className="mb-5">
      We also understand that some of you probably enjoy more to build your own
      things! It is a great pleasure to see how people continuously showcase
      their innovation ideas in the open source community. However, before you
      start, it might be a good idea to follow some best practices in the area
      that you will be working on. It is important to ensure that other people
      can also understand your code and contribute toward the project.
    </Text>
    <Text className="mb-5">
      The following are some of the resources that can help you in building your
      own project:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://github.com/danistefanovic/build-your-own-x"
        >
          Build Your Own X
        </a>
      </li>
      <li className="ml-5 my-1">
        <a target="_blank" href="https://roadmap.sh/">
          Roadmap
        </a>
      </li>
    </ol>

    <br />
    <h3>Examples</h3>
    <br />
    <Text className="mb-5">
      Here are some examples of good PR that adhere to the standards of
      OpenHack:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        <a target="_blank" href="https://github.com/MarkBind/markbind/pull/974">
          Fix plugin live reloading for relative file paths
        </a>
      </li>
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://github.com/nusmodifications/nusmods/pull/2449"
        >
          Highlight today on exam calendar
        </a>
      </li>
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://github.com/source-academy/cadet/pull/196"
        >
          Complete lambda integration
        </a>
      </li>
    </ol>

    <br />
    <h3>Looking for Help?</h3>
    <br />
    <Text className="mb-5">
      If you are still stuck, you can always ask for help on our{" "}
      <a target="_blank" href="https://t.me/nushackers_chat">
        Telegram chat
      </a>
      .
    </Text>
  </Page>
);

export default Start;
