# Troubleshooting

While deploying your app or making changes, you may run into a situation where your app will not deploy. This can happen for a number of reasons, and in this guide, you'll learn a few things that may help you get moving again.

## Check the build logs

The platform will build linked branches in GitHub when apps (or environments) are created and any time a linked branch changes. Pushing directly into a branch and merging a PR both trigger a build. During the build, the platform will run `npm i` and `npm run wpe-build`. It's possible that either of these could fail and your build logs will tell you what happened.

List the builds for an Environment of an App:

First, find your app name by running:

```bash
$ wpe apps list
```

Next, find your Environment ID by running:

```bash
$ wpe apps get APP_NAME
```

Once you have your APP_NAME and ENVIRONMENT_ID, use them in the following command to view your builds:

```bash
$ wpe builds list -a APP_NAME -e ENVIRONMENT_ID
```

This command will show you a list of builds. Now, you can find the build logs for a specific build with the ID of the build using the `get` command:

```bash
$ wpe alpha builds get BUILD_ID
```

Look through the Error Output and Build Output for any issues that may be preventing the build from completing.

## Ensure `package.json` lists your dependencies

Your `package.json` tells the platform how to build your app.

First, it installs the dependencies for your app using `npm i`. In order to do this, all of your dependencies need to be listed under the `dependencies` section of the `package.json`. Here's an example:

```text
"dependencies": {
  "@apollo/react-hooks": "^3.1.5",
  "@apollo/react-ssr": "^3.1.5",
  "@fortawesome/fontawesome-free": "^5.15.0",
  "@zeit/next-css": "^1.0.1",
  "@zeit/next-sass": "^1.0.1",
  "apollo-boost": "^0.4.9",
  "bootstrap": "^4.5.2",
  "bootstrap-extensions": "^1.2.2",
  "graphql": "^14.7.0",
  "next": "^9.5.3",
  "node-sass": "^4.14.1",
  "react": "^16.13.1",
  "react-dom": "^16.13.1"
},
```

Newer versions of `npm` will automatically add dependencies to your `package.json`, but make sure there aren't any missing. This is a common cause of an app working on your machine but not on the platform.

## Ensure `package.json` contains a `wpe-build` script

After the platform pulls your code and runs `npm i`, it will execute the `wpe-build` script by running `npm run wpe-build`. Here is an example `scripts` section:

```text
"scripts": {
  "dev": "next",
  "build": "next build",
  "wpe-build": "",
  "start": "next start -p 8080"
},
```

Note that it is acceptable to have a blank script (i.e. `"wpe-build": ""`), but the script must exist.

## Check your branch configuration

If the branch that you are using GitHub does not match the branch that you have configured for your environment, the platform will not build your software. Double check that the branch configured for the environment matches the branch you're committing to in GitHub:

```bash
$ wpe apps get APP_NAME
```

This command will list your app and the environment configurations with the branch names.

**Note:** [GitHub is changing](https://github.com/github/renaming) the default branch name from `master` to `main`. Depending on where your organization is on that journey, and when your repository was created, your default may be `master` or `main`. WP Engine supports the use of the more inclusive `main`, so this guide uses `main` in examples. This may be a source of inconsistency.

## Build succeeded but app is not available

If your build was successful but your app is not available at the URL provided, the likely culprit is that your app is running on the wrong port. Atlas expects your app to be running on port 8080. When the platform starts your application, it runs `npm start`. This script found in your `package.json` needs to start your server on port 8080. You can also use the environment variable `PORT`.

Example script for Next.js:

```text
"start": "next start -p 8080"
```

Using the PORT environment variable:

```text
"start": "next start -p ${PORT}"
```
