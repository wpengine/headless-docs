# Deploy Your First App

Now that we have an app up and running, let's deploy it to the Headless Platform.

## Add App to GitHub

Initialize a repo:

```
$ git init
```

Create a `.gitignore` file in the root of your application, and add this config to it. (Tip: Add anything else you might want to leave out of the repo.)

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

- Log in to [GitHub](https://github.com).
- Create a new repository with the name of your choice.

Once you have the repo created in GitHub, run:

```
$ git remote add origin YOUR_GITHUB_URL
$ git push -u origin master
```

In this guide, you'll hook your current branch (`master`) up to the platform for deployment, but you're free to set this up however you'd like. Ideally, you'll have multiple branches that represent environments like production, staging, and dev, but for the purposes of this guide, we're going to focus on a single branch/environment.

## Authenticate with the Platform

In order to create a new app, you need to log in via your WP Engine account and connect your GitHub account.

First, login to your WP Engine account:

```
$ wpe alpha auth login
```

After you've successfully logged in, connect your GitHub account:

```
$ wpe alpha auth login github
```

In order to work with headless, we need to set our account context. Your account name can be found in the WP Engine User Portal in the top left of the nav bar. To set the account context, run:

```
$ wpe alpha context set account YOUR_ACCOUNT_NAME
```

Now, you should be able to run a command without getting an error.

Try running the `list` command and make sure you do not receive an error. The list will be empty until you `create` an app later on in the guide:

```
$ wpe alpha apps list
```

## Create a `wpe.json` file

In the root of your project, create a file named `wpe.json`. This is the file we will use to configure our deployment.

An `app` only requires a few fields and doesn't represent a deployment. You can think of an app the same way you think of a Site in the WP Engine portal for WordPress. App `environments` represent the deployment that is connected to a branch in your repo.

Copy this basic configuration into your `wpe.json` file:

```json
{
  "name": "My-First-Headless-App",
  "repo": "YOUR-github-org-or-user/your-repo",
  "environments": [
    {
      "name": "Production",
      "branch": "master",
      "wp_environment_name": "YOUR WordPress environment name",
      "secrets": [
        {
          "key": "WP_URL",
          "value": "https://yoururl"
        }
      ]
    }
  ]
}
```

Replace `repo` with the repo you want to connect to your app. Your repo consists of the GitHub organization or user and the repo name.

For example, the GitHub repo, https://github.com/matt-landers/headless-summit2020, is represented by `matt-landers/headless-summit2020`. Notice that it is just the repo url without `https://github.com/`.

Replace the value of `wp_environment_name` with the environment name from User Portal. For instance, if domain name is `env_name.wpengine.com`, use `env_name` as `wp_environment_name`.

`branch` under the Production `environment` specifies the branch to watch and build.

Note: Remember that you added `wpe.json` to your `.gitignore` file, so it won't be checked into GitHub. This is important because you will use this config to store secrets (e.g., API keys, credentials) that you don't want to publish to GitHub.

## Deploy Your App

Now that you have a valid configuration file for a new app, deploy it to the platform with the following command:

```
$ wpe alpha apps create -f wpe.json
```

Next, use the `get` command to check the status of your deployment:

```
$ wpe alpha apps get My-First-Headless-App
```

The `get` command will return the details of your app. Your app will take a few minutes to deploy. Once it is complete, the `get` command will return the URL of your application. Copy the URL into a browser window, and you'll see your app up and running on the platform. :tada:

Now let's check out our configured [developer workflow](./workflow.md).
