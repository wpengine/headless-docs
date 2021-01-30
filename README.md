# Introduction

Welcome to the WP Engine Headless Platform for WordPress, Atlas!

If you're new to headless, this is the place to start. If you've created headless sites before, head over to our [Getting Started Guide](/guides/getting-started).

## What is Headless WordPress?

When we talk about headless with WordPress, we mean that we are using WordPress for content creation but not for front-end rendering. Instead of using traditional WordPress themes, you develop your front-end using a JavaScript framework like React. In addition, the front-end is hosted on a separate server than the WordPress instance.

Since the front-end is responsible for displaying content to the end user, it needs to access the content. In order to do that, it utilized the WordPress REST API or GraphQL via [WPGraphQL](https://www.wpgraphql.com/).

## Why Headless?

Headless is gaining momentum for a few reasons:

- Developer Choice - developers want to use modern frameworks like React to build sites and applications, and headless enables that possibility.
- Scalability - When you remove the burden of rendering from WordPress, you reduce the load on your WordPress instance which allows WordPress to scale much easier.
- Security - Removing the responsibility of rendering from WordPress reduces the surface area for attacks. Now, you can choose to only expose the API to the internet.
- Integrations - It is true that the WordPress community provides many integrations through plugins, but they don't always work well together. When you go headless, you have more control over your integrations, and most services support integrating with JavaScript and Node.js.

## Hosting Your Headless Apps

WordPress runs on PHP, but it's likely that your headless site will utilize [Node](https://nodejs.org/). At the very least, you'll use Node and NPM to manage JavaScript dependencies and bundle your applications (i.e. webpack).

At WP Engine, we have a Node hosting platform in Alpha with General Availability coming early this year. The platform works differently than our WordPress platform. With WordPress, you get a server that you can FTP or SSH into, but with Node, the infrastructure is opaque to you. All you need to do is point our platform to a GitHub repo, and we'll watch the repo and deploy it automatically!

# WP Engine Headless Concepts

The Node hosting platform is part of the solution for a headless site. The other part is the WordPress instance. These 2 work together to make up your site.

We call the Node portion of your site an **app**. An app can have _n_ number of **environments**. Let's explore these concepts.

## Apps and Environments

An **app** is a logical container of all of your _environments_ for the Node portion of your site. An app can have multiple _environments_ like production, staging, and development.

Apps are linked to a single GitHub repository (i.e. https://github.com/matt-landers/headless-wpe). Environments are linked to a branch within the repository of the app. It's up to you to decide which branch relates to which environment. It's common for your _main_ branch to be linked to your production environment.

Here's an example configuration for a typical app with a Production and Development environment.

```json
{
  "name": "MyHeadlessApp",
  "repo": "matt-landers/headless-wpe",
  "environments": [
    {
      "name": "Production",
      "branch": "main",
      "wp_environment_name": "headlesswpe",
      "env_variables": [
        { "key": "WP_URL", "value": "https://headlesswpe.wpengine.com" }
      ]
    },
    {
      "name": "Development",
      "branch": "dev",
      "wp_environment_name": "headlesswpe-dev",
      "env_variables": [
        { "key": "WP_URL", "value": "https://headlesswpe-dev.wpengine.com" }
      ]
    }
  ]
}
```

The **app** has 3 properties:

- name - the name of your app which you choose.
- repo - the GitHub repository linked to your app.
- environments - an array of environments that your app contains.
  - Each environment is deployed to the platform and received a unique URL.

Each **environment** has 4 properties:

- name - the name you choose for the environment.
- branch - a branch that exists in the GitHub repo linked to the app.
- wp_environment_name - the name of the WordPress environment (found in the user portal) that you want to link to your Node environment.
- env_variables (optional) - an array of environment variables that you want to be available at build-time and runtime as OS environment variables.
  - In Node, you can access these variables with `process.env`.
  - Environment variables are useful for storing information needed to build or run your application like API keys/secrets.

## Connecting Your WordPress Backend

Each app environment is paired with a WordPress backend. In the [WP Engine User Portal](https://my.wpengine.com1), the WordPress equivalent to an _app_ is a _site_. A site has environments just like apps. Each _app environment_ needs to be paired with a _site environment_ via the site's environment id (found in user portal). You make the connection by setting the **`wp_environment_name`** property for each environment in your app config.

The **`wp_environment_name`** property is **required** as it provides the authorization context for the environment which determines which users have access to modify and deploy the _app environment_.
