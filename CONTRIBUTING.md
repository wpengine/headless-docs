# Contribute to headless-docs documentation

This documentation is open source. Anyone is welcome to create and edit it. Notably, we love it when users:

- Find errors or have ideas on how to improve existing documentation
- Have an idea for NEW documentation that would help other users

Before contributing for the first time, please review our [Code of Conduct](CODE-OF-CONDUCT.md)

## Git workflow overview

Please follow these steps when contributing changes.

1. Create a new feature branch off of `main`. Name the branch "feature/my-new-changes", where "my-new-changes" is reflective of the branch's purpose.
1. Make commits on your feature branch.
1. Submit a PR from your feature branch into the `develop` branch.
1. Your PR will be reviewed by a DevRel team member, and merged in when ready.
1. The DevRel team member will merge `develop` into `main` when ready to deploy to production.

More detailed instructions about how to contribute changes are below.

## Prerequisites

To contribute to the documentation, you'll need:

- [A GitHub account](https://github.com/join).
- _Optional_ A code editor such as [Visual Studio Code](https://code.visualstudio.com/).
- An understanding of [Markdown](https://en.wikipedia.org/wiki/Markdown). A helpful cheat sheet is available [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

It's also helpful to know some basic `git` concepts before diving into contribution. These concepts include:

- [Repositories](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)
- [Forks](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Clones](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository?query=Fork)
- [Branches](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Commits](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits/about-commits)
- [Pull Requests](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

## Directory structure

Each top-level directory inside of the headless-docs repo relates to a separate body of documentation, as shown below.

- `/atlas-content-modeler` -> [Atlas Content Modeler documentation](https://developers.wpengine.com/docs/atlas-content-modeler/introduction)
- `/atlas-search` -> [Atlas search documentation](https://developers.wpengine.com/docs/atlas-search/introduction)
- `/atlas` -> [Atlas hosting platform documentation](https://developers.wpengine.com/docs/atlas/overview)
- `/faustjs` -> [Faust.js documentation](https://faustjs.org/docs/next/getting-started)
- `/glossary` -> [Headless WordPress glossary](https://developers.wpengine.com/docs/glossary)

## Edit an article

With your fork created, you can edit any Atlas docs from this GitHub repository. Before following these steps, make sure you are on the `wpengine/headless-docs` repository, not your fork.

1. Select the product for which you want to edit an article.

2. Find the article you want to edit and click to open the file.

3. Select the pencil (**Edit this file**) icon at the top of the article.

4. Make any edits to the article directly through the GitHub website.

   **Note:** If you are using a desktop client or the command line and are forking or cloning the repository, be sure to make your changes in a new branch. Doing so ensures that you produce a pull request (PR) rather than committing changes directly on the `develop` branch.

5. At the bottom of the page, add a title for your change in the **Commit changes** section.

6. Accept the default branch name or make a new one and click **Commit changes**.

7. `base` should default to `develop` and `compare` should default to `{your-branch}`.

   If the settings are not correct, use the dropdown menus to select the appropriate settings. The fork menus might not be present.

8. Describe the changes that you made in a PR message.

   Use the following guidelines to create the PR message:

   - Provide a brief description of the change, starting with an imperative verb.
     For example, "Add a paragraph about... ."
   - If you make a complex edit, explain why you are making the edit in the larger box under **Commit changes**. For example, if you are changing the
     formatting of an article because you want an ordered list instead of an unordered one,
     say, "Switch list in the middle of the article to ordered to show a clear progression of steps."

9. Click **Create pull request**.

A member of the Atlas team will review your PR. Depending on the review feedback,
you might need to make additional changes.

## Edit an existing PR

Should you need to make additional changes to the PR, follow these steps:

1. From the `wpengine/headless-docs` repo, select the **Pull requests** tab.

2. Find and click your PR.

3. Click the **Files changed** tab.

4. Click the pencil icon next to the file that you want to change.

5. Make your change in the editor.

6. Provide a brief description of the change.

7. Click the **Commit directly to the `your-branch-name` branch** option, and
   then click **Commit changes**.

A member of the Atlas team will merge your changes or request additional ones.

## Create a new page

When creating new Atlas content, we recommend using the "Docs Like Code" methodology. While you can easily edit pages through GitHub, article creation tends to be easier with familiarity with your chosen code editor and familiarity with the command line. If this is your first time using either:

- [Generate an SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for authentication from the command line to GitHub.
- [Add an SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to your GitHub account.
- Familiarize yourself with basic [Git commands](https://training.github.com/downloads/github-git-cheat-sheet/).

With Git set up on your local machine, perform the following to create a new page:

1. On your local machine `cd` into the directory you want to copy `headless-docs` into.

2. Clone your fork of the `headless-docs` repository. Enter `git clone <GitHubUsername>/headless-docs`. After the cloning completes, run `cd headless-docs`.

3. Create a branch for your new page. Run `git checkout -b "feature/my-new-changes"`, where "my-new-changes" is reflective of the branch's purpose.

4. Open the `headless-docs` repo in your code editor and make changes. Using an in-browser Markdown preview tool like [StackEdit](https://stackedit.io/app) can be helpful to see what the page you're editing will look like when it's rendered to HTML.

   **Note:** If your article includes images, add the image to the `assets` of the product directory and add a link to the image in your article. For example, assuming your image is named **Picture1.png** use `{{<img src="../assets/Picture1.png" title="" alt="">}}`

5. If you create any new documentation pages, be sure to add the following metadata at the top of the file:

   ```
   ---
   slug: /product-name/title-of-page
   title: Title of Page
   description: SEO-friendly description of page
   ---
   ```

6. Save all created and edited files.

7. Create a pull request (PR).

   a. Add your new content and image files, if any:

   `git add title-of-page.mdx`
   `git add assets/Picture1.png`

   b. Commit the file:

   `git commit -m "Create a new page"`

   c. Push the change:

   `git push upstream`

   d. In your web browser, navigate to **https://github.com/wpengine/headless-docs**.

   e. Select **Pull Requests**

   f. You should see your branch name at the top of the Pull Requests page. Select **Compare & pull request**.

   h. Your `base-repository` should default to `wpengine/headless-docs` and `base` should default to `develop`. Click the dropdown on `head-repository` and select your clone of the support-how-to repo. Click the dropdown on `compare` and select your branch. Select **Create new pull request**.

8. Add a title and a description describing your change. Finally, select **Create pull request**.

A member of the Developer Relations team will review your changes. Be sure to look out for any questions or requests for further changes they may have. Once the PR is approved and merged in, a DevRel team member will get it deployed to production.

## Feedback

If you spot any issues with the documentation, please [create an issue](https://github.com/wpengine/headless-docs/issues) so it can be addressed.
