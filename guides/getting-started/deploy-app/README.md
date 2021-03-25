---
title: Deploy Your First App
description: After you have a headless application running, deploy that application to the Atlas Headless Platform.
---

# Deploy Your First App

Now that we have created a [simple app](/guides/getting-started/create-app) , let's deploy that app to the Headless Platform.

## Add Your App to GitHub

`create-next-app` initializes your local git repo and makes the first commit. Now, let's push the code to GitHub.

- Log in to [GitHub](https://github.com).
- Create a new repository in GitHub with the name of your choice.

Once you have the repo created in GitHub, run:

```bash
$ git remote add origin YOUR_GITHUB_URL
$ git push -u origin main
```

Using this Deploy App guide, you will connect your current branch (`main`) to the Atlas platform for deployment and customize your deployment. Ideally, you will have multiple branches representing environments like production, staging, and development, but for this guide's purposes, we're going to focus on a single branch/environment.

## Deploy Your App

At this point, you can decide to deploy via the [User Portal](https://my.wpengine.com) or the CLI:

- [Deploy via the User Portal](/guides/getting-started/deploy-app/portal)
- [Deploy via the CLI](/guides/getting-started/deploy-app/cli)
