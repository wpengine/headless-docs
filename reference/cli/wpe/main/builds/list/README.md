# wpe builds list

## Description
Get high-level details of all builds for a specified app's environment.

## Usage

```bash
$ wpe builds list [OPTIONS]
```

## Extended Description

The `wpe builds list` command will print information about builds for a specific app's environment. In order to use this command you will need the app name and environment ID.

## Options

| Name, shorthand     | Description                     |
|:--------------------|:--------------------------------|
| `--app, -a`         | The name of the app             |
| `--environment, -e` | The ID of the app's environment |
| `--help, -h`        | Help for list                   |

## Examples

When listing builds for an app environment you will need to know the app name. Use the `wpe  apps list` command to find the app name:

```bash
$ wpe  apps list
```

Let's assume you have an app named `myapp`, now you need to determine the ID of the environment for which you want to list builds. Do this using the `wpe  apps get` command:

```bash
$ wpe apps get myapp
```

Let's assume your environment ID is `bmna3gedlzerwcb4vc04gssl`. Copy the ID of the environment you want and then run the following command to list the builds:

```bash
$ wpe  builds list -a myapp -e bmna3gedlzerwcb4vc04gssl
```

Running the above command will print something that looks similar to the following:

```text
ID                              APP_NAME        ENVIRONMENT                     REPOSITORY              BRANCH  TIMESTAMP               COMMIT_SHA
sqdt3na72uwu4sea7xwro5o8        myapp           bmna3gedlzerwcb4vc04gssl        organization/myapp      main    2021-01-01T00:00:46Z    71234c6
```

As you can see above you are provided with high-level information about the builds for the specified app's environment. This includes the repository, branch, commit sha, and timestamp of when the environment was last built.

## Parent Command
| Command                                             | Description                 |
|:----------------------------------------------------|:----------------------------|
| [wpe builds](/reference/cli/wpe/main/builds) | The base command for builds |
