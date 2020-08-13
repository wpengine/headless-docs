# Deploy Your First App

Now that we have an app up and running, let's deploy it to the Headless Platform.

## Add App to GitHub

Initialize a repo:

```
$ git init
```

Create a `.gitignore` file and add this config to it. Add anything else you might want to leave out of the repo.

```
node_modules
.next
wpe.json

# Add additional files/folders here:
```

Create the initial commit:

```
$ git add .
$ git commit -m "first commit"
```

Now that we have a local git repository set up, let's connect it to GitHub.

- Log in to [GitHub](github.com).
- Create a new repository with the name of your choice.
- Follow the instructions to link an existing local repo to the new GitHub repo.

By default, you'll hook your current branch up to `master`, but you're free to set this up however you'd like. Ideally, you'll have multiple branches that represent environments like production, staging, and dev, but for the purposes of this guide, we're going to focus on a single branch/environment.

## Authenticate with the Platform

In order to create a new app, you need to log in via your WP Engine account and connect your GitHub account.

First, log in to your WP Engine account:

```
wpe alpha auth login
```

After you've successfully logged in, connect your GitHub account:

```
wpe alpha auth login github
```

Now you should be able to run a command without getting an error.

Try running:

```
wpe alpha apps list
```

## Create a `wpe.json` file

In the root of your project, create a file named `wpe.json`. This is the file we will use to configure our deployment.

An `app` only requires a few fields and doesn't represent a deployment. App `environments` represent the deployment that is connected to a branch in your repo.

Copy this basic configuration into your `wpe.json` file:

```json
{
  "name": "My-First-Headless-App",
  "repo": "your-github-org-or-user/your-repo",
  "environments": [
    {
      "name": "Development",
      "branch": "dev",
      "wp_install_name": "install_name"
      "secrets": [
        {
          "key": "YOUR_ENV_VAR",
          "value": "123"
        }
      ]
    }
  ]
}
```

Replace `repo` with the repo you want to connect to your app. Your repo consists of the GitHub organization or user and the repo name.

For example, the GitHub repo, https://github.com/matt-landers/headless-summit2020, is represented by `matt-landers/headless-summit2020`. Notice that it is just the repo url without `https://github.com/`.

Replace `branch` under the Development `environment` with the branch in your repo you want to connect to Development.

Replace the value of `wp_install_name` with the environment name form User Portal. For instance, if domain name is `env_name.wpengine.com`, use `env_name` as `wp_install_name`.

Note: Remember that you added `wpe.json` to your `.gitignore` file, so it won't be checked into GitHub. This is important because you will use this config to store secrets (e.g., API keys, credentials) that you don't want to publish to GitHub.

## Deploy Your App

Now that you have a valid configuration file for a new app, deploy it to the platform with the following command:

```
$ wpe alpha apps create -f wpe.json
```

The `create` command will return the `id` of the application that was created.

Now, copy the `id` and use it in the `get` command to check the status of your deployment:

```
$ wpe alpha apps get APP_ID
```

The `get` command will return the details of your app. Your app will take a few minutes to deploy. Once it is complete, the `get` command will return the URL of your application. Copy the URL into a browser window, and you'll see your app up and running on the platform. :tada:

Now let's check out our configured [developer workflow](./workflow.md).
