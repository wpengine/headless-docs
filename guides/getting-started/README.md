# Getting Started Guide

In this guide, you'll learn the basics of deploying apps on the WP Engine Headless Platform.

Requirements:

- [Node.js](https://nodejs.org/en/download/)
- [git](https://git-scm.com/downloads)
- WP Engine Headless CLI Tool ([install](../../README.md#installation))

What we'll cover:

- [Supported Apps](#supported-apps)
- [Creating your first app](./create-app.md)
- [Deploying your first app](./deploy-app.md)
- [Making changes to your app (workflow)](./workflow.md)

## Supported Apps

The platform supports [Node.js](https://nodejs.org/) based applications.

Node.js uses npm for its package management which allows you to set the version of Node your applications requires via the `engines` property inside your project's `package.json`.

```json
{
  "engines": {
    "node": "12.18.0"
  }
}
```

The supported versions of Node are 10, 12, and 14. Specifying a version of Node smaller than the minimum supported version will result in the application of the minimum version (10); specifying a larger version will result in the application of the maximum supported version (14).
