---
title: Deploy your app via the User Portal
description: Use the Atlas user portal to create, update, and trouble headless applications.
---

# Deploy your app via the User Portal

First login to the [User Portal](https://my.wpengine.com) to create, update, delete, and troubleshoot headless apps on Atlas.

## View your headless apps

If your account is enabled for Atlas, you should see "Headless apps" in the menu:

![Headless Apps Menu Item](/guides/getting-started/deploy-app/portal/images/portal-menu.jpg)

## Creating an App

Click the "Get started" or "Create an app" button in the top right. This will take you to a form where you'll need the following information:

### Headless app name

The name of your app should be related to the site that you are creating. It will be the logical container for your environments (e.g. production, dev, etc.).

### Headless environment name

During app creation, you will create your first environment. You can add more environments after your app is created. Typically, your first environment would be a development environment. You can name the environment anything you want, but it will be related to a specific branch in your repo.

### Link to a WordPress environment

Every headless environment is associated to a WordPress environment via the site environment name. The environment name is found under your WordPress sites and the associated environment. It is the prefix in the URL for your WordPress (e.g. **headlesswpe**.wpengine.com or **headlesswpe**.wpenginepowered.com )

### Region

Choose the region you want your headless app hosted. When you click on the box, you should see a dropdown. You can choose from:

- Australia Southeast
- Europe West
- United Kingdom
- US Central

### GitHub Repository

A headless app can only be associated to a single GitHub repository. The format for the repository is `username/reponame`.

If the repo URL is `https://github.com/matt-landers/headless-wpe`, the expected input is `matt-landers/headless-wpe`.

### GitHub Repository Branch

Specify the repository branch that you want to be related to your headless app environment.

### Environment Variables

Environment variables are key/value pairs. The key must be alphanumeric with no spaces, and the value can be any string input.

Environment variables are OS level environment variables that will be available to your app during the build step (`npm run wpe-build`) and at runtime (`npm start`). In node, you can access the variables via `process.env.KEY`.

The headless framework requires 2 environment variables which are in your `.env.local` file:

- `WORDPRESS_URL` - the location of your WordPress instance
- `WP_HEADLESS_SECRET` - the secret found in the plugin via Settings->Headless in WP admin.

Add these environment variables to continue.

### Create App

Once you've filled out the form, click the "Create app" button in the top right of the form.

If there aren't any errors, you'll be taken to the environment page where you can see the status of your headless app environment. At first, it will be in a "Building code" status. It should look something like this:

![Headless App Building](/guides/getting-started/deploy-app/portal/images/portal-app-building.jpg)

Once the build is complete, you can view your site running at the "Headless URL" :tada:

Note: If your build failed, you can click the build logs found below Environment Variables to investigate what went wrong.

Now let's check out our configured [developer workflow](/guides/getting-started/workflow).
