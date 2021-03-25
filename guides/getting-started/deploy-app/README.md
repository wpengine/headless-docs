---
title: Deploy Your First App
description: After you have a headless application running, deploy that application to the Atlas Headless Platform.
---

# Deploy Your First App

Now that we have an app up and running, let's deploy it to the Headless Platform.

## Add Your App to GitHub

`create-next-app` initializes your local git repo and makes the first commit. Now, let's push the code to GitHub.

- Log in to [GitHub](https://github.com).
- Create a new repository in GitHub with the name of your choice.

Once you have the repo created in GitHub, run:

```bash
$ git remote add origin YOUR_GITHUB_URL
$ git push -u origin main
```

Using this guide, you will connect your current branch (`main`) to the platform for deployment, but you are free to set this up however you'd like. Ideally, you will have multiple branches that represent environments like production, staging, and development, but for the purposes of this guide, we're going to focus on a single branch/environment.

## Deploy Your App

At this point, you can decide to deploy via the [User Portal](https://my.wpengine.com) or the CLI:

- [Deploy via the User Portal](/guides/getting-started/deploy-app/portal)
- [Deploy via the CLI](/guides/getting-started/deploy-app/cli)
