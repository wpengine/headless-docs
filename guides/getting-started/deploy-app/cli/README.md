# Deploy your app via the Headless CLI

If you haven't installed the CLI yet, go ahead and do that [here](/guides#install-the-atlas-cli).

## Authenticate with the Platform via the CLI

In order to create a new app, you need to log in via your WP Engine account and connect your GitHub account.

First, log in to your WP Engine account:

```bash
$ wpe alpha auth login
```

After you've successfully logged in, connect your GitHub account:

```bash
$ wpe alpha auth login github
```

Note: When connecting your GitHub account, you need to give access to the repository you created and pushed to earlier.

In order to work with headless apps, we need to set our account context. Your account name can be found in the WP Engine User Portal in the top left of the navigation bar. To set the account context, run:

```bash
$ wpe alpha context set account YOUR_ACCOUNT_NAME
```

Now you should be able to run a command without getting an error.

Try running the `list` command to make sure you do not get any errors. The list will be empty until you `create` an app later in the guide.

```bash
$ wpe alpha apps list
```

## Create a `wpe.json` File

In the root of your project, create a file named `wpe.json`. This is the file we will use to configure our deployment.

An `app` only requires a few fields and does not represent a deployment. You can think of an app the same way you think of a site in the WP Engine Portal. App `environments` represent the deployment that is connected to a branch in your repo.

Copy this basic configuration into your `wpe.json` file:

```json
{
  "name": "My-First-Headless-App",
  "repo": "YOUR-github-org-or-user/your-repo",
  "region": "US-C",
  "environments": [
    {
      "name": "Production",
      "branch": "main",
      "wp_environment_name": "YOUR WordPress environment name",
      "env_variables": [
        {
          "key": "WORDPRESS_URL",
          "value": "https://yoururl"
        }
      ]
    }
  ]
}
```

Replace `repo` with the repo you want to connect to your app. Your repo consists of the GitHub organization or user and the repo name.

For example, the GitHub repo https://github.com/matt-landers/headless-summit2020 is represented by `matt-landers/headless-summit2020`. Notice that it is just the repo URL without `https://github.com/`.

`region` can be set to one of the following:

- `EU-W` - Europe West
- `UK` - United Kingdom
- `US-C` - US Central
- `AUS-SE` - Australia Southeast

Replace the value of `wp_environment_name` with the environment name from User Portal. For instance, if the domain name is `env_name.wpengine.com`, use `env_name` as `wp_environment_name`.

`branch` under the Production `environment` specifies the branch to watch and build.

`domains` can be added to your production environment, but for the purposes of this guide, we won't add a custom domain. For instructions on how to add a custom domain in a production environment, see [Introduction > WP Headless Concepts > Apps and Environments](/guides#apps-and-environments).

`env_variables` are optional OS level environment variables that are available to you during build and runtime. You can use these to store API secrets, your WordPress URL, etc. They can be accessed in Node via `process.env.KEY`.

**Important:** Remember that you added `wpe.json` to your `.gitignore` file, so it will not be checked into GitHub. This is important because you will use this config to store secrets (e.g., API keys, credentials) that you don't want to publish to GitHub.

## Deploy Your App

Now that you have a valid configuration file for a new app, deploy it to the platform with the following command:

```bash
$ wpe alpha apps create -f wpe.json
```

Next, use the `get` command to check the status of your deployment:

```bash
$ wpe alpha apps get My-First-Headless-App
```

The `get` command will return the details of your app. Your app will take a few minutes to deploy. Once deployment is complete, the `get` command will return the URL of your application. Copy the URL into a browser window, and you'll see your app up and running on the platform. :tada:

Now let's check out our configured [developer workflow](/guides/getting-started/workflow).
