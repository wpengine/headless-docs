# Introduction

Welcome to Headless WordPress at WP Engine!

If you're new to headless, this is the place to start. If you've created headless sites before, head over to our [Getting Started Guide](/guides/getting-started/README.md).

## What is Headless WordPress?

When we talk about headless with WordPress, we mean that we are using WordPress for content creation but not for front-end rendering. Instead of using traditional WordPress themes, you develop your front-end using a JavaScript framework like React. In addition, the front-end is hosted on a separate server from the WordPress instance.

## Why Headless?

Headless is gaining momentum for a few reasons:

- Developer Choice - developers want to use modern frameworks like React to build sites and applications, and headless enables that possibility.
- Scalability - When you remove the burden of rendering from WordPress, you reduce the load on your WordPress instance which allows WordPress to scale much easier.
- Security - Removing the responsibility of rendering from WordPress reduces the surface area for attacks. Now, you can choose to only expose the API to the internet.
- Integrations - It is true that the WordPress community provides many integrations through plugins, but they don't always work well together. When you go headless, you have more control over your integrations, and most services support integrating with JavaScript and Node.js.

## Hosting Your Headless Sites

WordPress runs on PHP, but it's likely that your headless site will utilize [Node](https://nodejs.org/). At the very least, you'll use Node and NPM to manage JavaScript dependencies and bundle your applications (i.e. webpack).

At WP Engine, we have a Node hosting platform in Alpha with General Availability coming early this year. The platform works differently than our WordPress platform. With WordPress, you get a server that you can FTP or SSH into, but with Node, the infrastructure is opaque to you. All you need to do is point our platform to a GitHub repo, and we'll watch the repo and deploy it automatically!
