# Deploy Your First App

Now that we have an app up and running, let's deploy it to the Headless Platlform.

## Authenticate with the Platform

In order to create a new app, you need to login via your WP Engine account and connect your GitHub account.

First login to your WP Engine account:

```
wpe alpha auth login
```

After you've succefully logged in, connect your GitHub account:

```
wpe alpha auth login github
```

Now, you should be able to run a command without getting an error.

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
    "name": "Development",
    "branch": "dev",
    "secrets": [
      "key": "YOUR_ENV_VAR",
      "value": "123"
    ]
  ]
}
```

Replace `repo` with the repo you want to connect to your app. Your repo consists of the GitHub organization or user and the repo name.

For example, the GitHub repo, https://github.com/matt-landers/headless-summit2020, is represented by `matt-landers/headless-summit2020`. Notice that it is just the repo url without `https://github.com/`.

Replace `branch` under the Development `environment` with the branch in your repo you want to connect to Development.

## Deploy Your App

Now that you have a valid configuration file for a new app, deploy it to the platform with the following command:

```
wpe alpha apps create -f wpe.json
```

The `create` command will return the `id` of the application that was created.

Now, copy the `id` and use in the `get` command to check the status of your deployment:

```bash
wpe alpha apps get APP_ID
```

The `get` command will return the details of your app. Your app will take a few minutes to deploy. Once it is complete, the get command will return the URL of your application. Copy the url into a browser window, and you'll see your app up and running on the platform.
