# Create Your First App

For our first app, we're going to use our open source [headless framework](https://github.com/wpengine/headless-framework).

1. First we need a WordPress site. You should have a site when you created your headless account. Your sites are in the [User Portal](https://my.wpengine.com). Navigate to the site environment you want to use for your backend, and click the WP Admin link at the top of the page. This will log your into WP Admin which is where we'll setup the framework plugin and WPGraphQL.
1. Download, upload, and activate the `wpe-headless` plugin. [(Plugin Download)](https://wp-product-info.wpesvc.net/v1/plugins/wpe-headless?download)
1. Install [WP GraphQL](https://wordpress.org/plugins/wp-graphql/) on the WordPress site if it's not already installed.
   - You can automatically install WPGraphQL from the framework plugin settings page as well.
1. Create a new Next.js app from our [getting-started project](https://github.com/wpengine/headless-framework/tree/canary/examples/getting-started):
   ```bash
   $ npx create-next-app -e https://github.com/wpengine/headless-framework/tree/canary --example-path examples/getting-started --use-npm
   ```
1. Navigate to the directory that Next created for you: `cd your-app`
1. Rename the sample `.env` file so that we can set the environment variables needed by the framework
   ```bash
   cp .env.local.sample .env.local
   ```
1. Populate `WORDPRESS_URL` in `.env.local` with the full URL to your WordPress site, including the `http://` or `https://` prefix.
1. Populate `WP_HEADLESS_SECRET` in `.env.local` with the secret key found at Settings → Headless in your WordPress admin area.
1. Start your app: `npm run dev`

You should be able to navigate to http://localhost:3000 and see your app running!

Next, let's [deploy the app](/guides/getting-started/deploy-app) to the Headless Platform. :rocket:
