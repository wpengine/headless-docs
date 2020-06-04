# Getting Started Guide

In this guide, you'll learn the basics of deploying apps on the WP Engine Headless Platform.

What we'll cover:

- Supported Apps
- Creating Your First App
- Deploying Your App
  - The Build Process
- Development Workflow

## Supported Apps

The platform supports [Node.js](https://nodejs.org/) based applications.

Node uses npm for it's package management which allows you to set the version of Node your applications requires via the `engines` property.

```json
{
  "engines": {
    "node": "12.18.0"
  }
}
```

The minimum version of Node supported is version 10.
