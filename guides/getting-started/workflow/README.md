# Developer Workflow

Now that you have an app deployed to the platform, any changes you make to your branch will be automatically deployed. To try this out, let's make a change to the site.

Open `wp-templates/front-page.tsx` and change the `<Hero>` title to something different.

Save the file and then run:

```bash
$ git add .
$ git commit -m "updated site hero title"
$ git push
```

After a few minutes, your site will be updated! Just refresh the browser to see your changes.

You can view the status of the build in the User Portal or via the CLI.

## View Status via the CLI

The URL for your deployment can be found with the `apps get` command:

```bash
$ wpe alpha apps get APP_NAME
```

By running this command, you can also see current status of your build.

Remember, you can get your APP_NAME by listing your apps:

```bash
$ wpe alpha apps list
```

If you want to see standard output / error logs for you app, type:

```bash
$ wpe alpha logs get -a APP_NAME -e ENV_ID
```

You can get the environment ID by running `wpe alpha apps get APP_NAME` in the CLI.

If you want to delete your environment, run:

```bash
$ wpe alpha envs delete ENV_ID -a APP_NAME
```

When you re-run your URL, site should no longer be visible (changes might take few seconds to apply).
