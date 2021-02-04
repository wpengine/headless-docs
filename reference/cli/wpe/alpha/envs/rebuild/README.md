# wpe alpha envs rebuild

## Description
Manually invoke a rebuild of a specified application environment.

## Usage

```bash
$ wpe alpha envs rebuild $ENV_ID [OPTIONS]
```

## Extended Description

The `wpe alpha envs rebuild` command allows you manually rebuild a specified environment for the application. It kicks off the same process that occurs when a new commit is pushed to git.

## Options

| Name, shorthand | Description      |
|:----------------|:-----------------|
| `--app, -a`     | The app name     |
| `--help, -h`    | Help for rebuild |

## Examples

Let's assume the environment ID is `bmna3gedlzerwcb4vc04gssl` and the app name is `myapp`. Running the following command will rebuild the environment:

```bash
$ wpe alpha envs rebuild bmna3gedlzerwcb4vc04gssl -a myapp
```

## Parent Command
| Command                                         | Description               |
|:------------------------------------------------|:--------------------------|
| [wpe alpha envs](/reference/cli/wpe/alpha/envs) | The base command for envs |
