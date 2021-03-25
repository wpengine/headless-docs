---
title: Deploy your app via the User Portal
description: Use the Atlas user portal to create, update, and trouble headless applications.
---

# Deploy your app via the User Portal

You can also deploy your application in the Atlas portal. 

Log in to the [User Portal](https://my.wpengine.com) to create, update, delete, and troubleshoot headless apps on Atlas.

## View your headless apps

If your account is enabled on the Atlas platform, you should see **Headless apps** in the portal menu:

![Headless Apps Menu Item](/guides/getting-started/deploy-app/portal/images/portal-menu.jpg)

## Creating an App

Select **Get started** or **Create an app** button in the top right of the platform menu. A form appears, where you'll fill out the following information:

### Headless app name

The name of your app should be related to the site that you are creating. It will be the logical container for your environments (e.g., production, dev, etc.).

### Headless environment name

During app creation, you will create your first environment (i.e., staging, production). You can add more environments after the initial app creation. We recommend making your first environment a development environment, so you can test your app on the Atlas platform before creating a production environment. However, you can name the environment anything you want.

### Link to a WordPress environment

Every headless environment is associated with a WordPress environment via the site environment name. Find the environment name in the portal under your WordPress site and that site's associated environment. Look for the **headlesswpe** prefix in the URL for your WordPress site (e.g., **headlesswpe**.wpengine.com or **headlesswpe**.wpenginepowered.com )

### Region

Choose the region you want your headless app hosted. When you click on the box, you should see a dropdown. You can choose from:

- Australia Southeast
- Europe West
- United Kingdom
- US Central

### GitHub Repository

You can only associate a headless app to a single GitHub repository. The format for the repository is `username/reponame`.

If the repo URL is `https://github.com/matt-landers/headless-wpe`, the expected input is `matt-landers/headless-wpe`.

### GitHub Repository Branch

Specify the repository branch that you want to be related to your headless app environment.

### Environment Variables

Environment variables are key/value pairs. The key must be alphanumeric with no spaces, and the value can be any string input.

Environment variables are OS-level environment variables that will be available to your app during the build step (`npm run wpe-build`) and at runtime (`npm start`). In node, you can access the variables via `process.env.KEY`.

The headless framework requires two environment variables which are in your `.env.local` file:

- `WORDPRESS_URL` - the location of your WordPress instance
- `WP_HEADLESS_SECRET` - the secret found in the plugin via Settings->Headless in WP admin.

Add these environment variables to continue.

### Create App

Once you've filled out the form, click the **Create app** button.

If there aren't any errors, the environment page appears to see the status of your headless app environment. At first, it will be in a "Building code" status. It should look like this:

![Headless App Building](/guides/getting-started/deploy-app/portal/images/portal-app-building.jpg)

Once the build is complete, you can view your site running at the **Headless URL** :tada:

**Note:** If your build failed, you can click the build logs found below environment Variables to investigate what went wrong.

Now let's check out our configured [developer workflow](/guides/getting-started/workflow).
