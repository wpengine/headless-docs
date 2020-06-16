# Getting Started Guide

In this guide, you'll learn the basics of deploying apps on the WP Engine Headless Platform.

Requirements:

- [Node.js](https://nodejs.org/en/download/)
- [git](https://git-scm.com/downloads)
- WP Engine Headless CLI Tool ([install](../../README.md#installation))

What we'll cover:

- [Supported Apps](#supported-apps)
- [Creating Your First App](./create-app.md)
- [Deploying Your App](./deploy-app.md)
- Development Workflow

## Supported Apps

The platform supports [Node.js](https://nodejs.org/) based applications.

Node uses npm for it's package management which allows you to set the version of Node your applications requires via the `engines` property inside your project's `package.json`.

```json
{
  "engines": {
    "node": "12.18.0"
  }
}
```

The minimum version of Node supported is version 10.
