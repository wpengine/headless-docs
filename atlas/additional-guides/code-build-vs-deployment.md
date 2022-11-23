---
slug: /atlas/additional-guides/build-vs-deployment
title: Details of Atlas' Build and Deployment phases 
description: Get more familiar with the process of pushing new changes to your Atlas environments and understand its phases.
---

In this guide, you'll learn more about the process of pushing new changes to your Atlas environments and understand its phases.

## I push a new commit to my branch. What happens next?
On Atlas, the process of pushing new changes to your site is split into two phases:

### Code build phase
During the Code build phase Atlas pulls the code from your repository, installs your projects dependencies such as Node.js and npm packages, runs your project's `build` script and sets its `start` script.

### Deployment phase
During the Deployment phase Atlas starts your project using the start script and confirms it is running before pointing traffic at it.

## I see that the `code build` phase failed. What should I do?
If the `code build` phase failed, the most likely reason for that is some problem in your code that needs to be fixed so that your project can build properly. The first thing you should do is to check logs generated during the attempt of the build. You can find them by clicking on the link in the "trigger" column that corresponds to your failed build:
