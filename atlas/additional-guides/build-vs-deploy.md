---
slug: /atlas/additional-guides/build-vs-deployment
title: Details of Atlas' Build and Deployment phases 
description: Get more familiar with the process of pushing new changes to your Atlas environments and understand its phases.
---

In this guide, you'll learn more about the process of pushing new changes to your Atlas environments and understand its phases.

## I push a new commit to my branch. What happens next?
On Atlas, the process of pushing new changes to your site is split into two phases:

### Build phase
During the Build phase Atlas pulls the code from your repository, installs your projects dependencies such as Node.js and npm packages, runs your project's `build` script and sets its `start` script.

### Deployment phase
During the deployment phase Atlas starts your project using the start script and confirms it is running before pointing traffic at it.
