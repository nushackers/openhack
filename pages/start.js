import React from "react";

import Page from "../components/Page";
import Text from "../components/Text";

const Start = () => (
  <Page>
    <h2 className="text-xl font-black">Getting Started</h2>
    <Text className="my-5">
      Not sure how to start? Fret not! Even experienced contributors were once
      in your position. In this section, we will help you to get started to work
      on open source projects.
    </Text>

    <h3>Using Git</h3>

    <Text className="my-5">
      Open source projects are typically maintained using git and made available
      online through git hosting services (e.g. GitHub, GitLab, and BitBucket).
      Before you start contributing to existing projects or even building your
      own projects, it would be wise to understand how people collaborate using
      git.
    </Text>
    <Text className="mt-5 mb-2">
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
          Introduction to Git - Orbital 2020 by Hao Wei
        </a>{" "}
        (
        <a target="_blank" href="https://www.youtube.com/watch?v=nc93yOGgP14">
          Video here
        </a>
        )
      </li>
    </ol>

    <h3>Contributing to Open Source Projects</h3>
    <Text className="my-5">
      To contribute toward an open source project, the following are typically
      some of the steps that you may need to go through:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        Find a project of your interest and look at how you can contribute.
        <ul>
          <li className="ml-8 my-1">
            Either visit their issue tracker (under "Issues" in their
            repository) to find an issue that the maintainers need help with,
            and offer your help or;
          </li>
          <li className="ml-8 my-1">
            Open an issue that explains what you want to improve (e.g. bug
            report, feature request, clean-up request, etc.), because a problem
            that you notice may not seem like a problem for other people
            (remember those memes saying "it's not a bug, it's a feature").
          </li>
        </ul>
      </li>
      <li className="ml-5 my-1">
        Once your help has been accepted, you can ask for guidance (if
        necessary) from those who are more experienced in the project on how you
        can make changes. Each project might have its own styles and design
        patterns (you can spot these easily if they have a contribution guide on
        their README). If they do have them, you should adhere to them to follow
        the project's conventions.
      </li>
      <li className="ml-5 my-1">
        Fork the repository and create a branch for you to make your changes.
      </li>
      <li className="ml-5 my-1">
        Finally, make your changes! Make sure to keep your code human-readable
        and create commits whenever you achieve a portion of the task or make
        notable changes. Make sure that people who will review your code can
        easily understand your implementation.
      </li>
      <li className="ml-5 my-1">
        Submit a PR (pull request) to the project repository and wait for
        reviews from the maintainers of the repository.
      </li>
      <li className="ml-5 my-1">
        Reviewers might accept your changes or request certain changes. Make
        sure you check your submitted PR often to see if it is merged or if
        there are any further changes that you need to make.
      </li>
    </ol>

    <Text className="my-5">
      Since open source projects vary in terms of the technologies they use and
      concepts that you need to understand before being able to contribute, the
      best guide is probably to read their documentation directly.
    </Text>
    <Text className="my-5">
      The following are some resources that can help you to understand how to
      contribute to open source projects:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        <a target="_blank" href="https://opensource.guide/how-to-contribute/">
          Open Source Guides - How to Contribute to Open Source?
        </a>
      </li>
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github"
        >
          DigitalOcean Open Source Tutorial Series - How to Create a Pull
          Request on GitHub
        </a>
      </li>
    </ol>

    <Text className="my-5">
      Here are some examples of good PR that adhere to the standards of
      OpenHack:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        <a target="_blank" href="https://github.com/MarkBind/markbind/pull/974">
          MarkBind - Fix plugin live reloading for relative file paths
        </a>
      </li>
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://github.com/nusmodifications/nusmods/pull/2449"
        >
          NUSMods - Highlight today on exam calendar
        </a>
      </li>
    </ol>

    <h3>Starting Your Own Open-Source Project</h3>
    <Text className="mt-5 mb-2">
      Some of you probably enjoy building your own projects more! To help you
      get started with that, here are some resources that might be useful:
    </Text>
    <ol className="mb-5">
      <li className="ml-5 my-1">
        <a
          target="_blank"
          href="https://github.com/danistefanovic/build-your-own-x"
        >
          Daniel Stefanovic - Build Your Own X
        </a>
      </li>
      <li className="ml-5 my-1">
        <a target="_blank" href="https://roadmap.sh/">
          Web Developer Roadmaps
        </a>
      </li>
      <li className="ml-5 my-1">
        <a target="_blank" href="https://school.nushackers.org/">
          NUS Hackers - Hackerschool
        </a>
      </li>
    </ol>

    <h3>Looking for Help?</h3>
    <Text className="my-5">
      If you want to discuss ideas or require any help, you can always join our
      community at our{" "}
      <a target="_blank" href="https://t.me/nushackers_chat">
        Telegram chat
      </a>
      .
    </Text>
  </Page>
);

export default Start;
