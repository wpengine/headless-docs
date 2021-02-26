# Create Your First App

The best way to understand how a Headless CMS operates is to create a simple application and deploy it. This tutorial uses WPEngine's open-source [headless framework](https://github.com/wpengine/headless-framework) and Next.js to create a simple application.

1. Make a WordPress site. You should have a site an Atlas account through WPEngine in the [User Portal](https://my.wpengine.com). Navigate to the site environment you want to use for your backend, and click the WP Admin link at the top of the page. This will log you into WP Admin, where the setup for the framework plugin and WPGraphQL occurs.
1. Download, upload, and activate the `wpe-headless` plugin. [(Plugin Download)](https://wp-product-info.wpesvc.net/v1/plugins/wpe-headless?download)
1. Install [WP GraphQL](https://wordpress.org/plugins/wp-graphql/) on the WordPress site. You can automatically install WPGraphQL from the framework plugin's **settings** page
1. Create a new Next.js app from our [getting-started project](https://github.com/wpengine/headless-framework/tree/canary/examples/getting-started). Open your Terminal application and enter:

   ```bash
   $ npx create-next-app -e https://github.com/wpengine/headless-framework/tree/canary --example-path examples/getting-started --use-npm
   ```

1. The Next.js responds with `√ What is your project named?`.  Enter a project name and press **Enter**. 

	There will now be a folder with that same name in your current working directory. Navigate to that directory with `cd your-app`, replacing `your-app` with the project name you specified.

1. Rename the sample `.env` file so that we can set the environment variables needed by the framework:

   ```bash
   cp .env.local.sample .env.local
   ```

1. Populate `WORDPRESS_URL` in `.env.local` with the full URL to your WordPress site, including the `http://` or `https://` prefix.
1. Populate `WP_HEADLESS_SECRET` in `.env.local` with the secret key found at Settings → Headless in your WordPress admin area.
1. Start your app with `npm run dev`

You should be able to navigate to http://localhost:3000 and see your app running!

Next, let's [deploy the app](/guides/getting-started/deploy-app) to the Headless Platform. :rocket: