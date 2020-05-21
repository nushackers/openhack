# OpenHack 2020

This is the source code for the OpenHack 2020 static site.

## Getting Started

First, install all dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Staging and Production

You can access a "staging site" of your changes by visiting
`branchName`--openhack.netlify.app. For example, to see how the branch `master`
looks like, you can visit https://master--openhack.netlify.app.

To push to production, merge your commits / PR to the `deploy` branch, after
which the changes will be up on https://openhack.nushackers.org.
