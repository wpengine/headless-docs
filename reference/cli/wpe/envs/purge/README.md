# wpe envs purge

## Description
Manually purge the domain cache for a specified application environment.

## Usage

```bash
$ wpe envs purge $ENV_ID [OPTIONS]
```

## Extended Description

The `wpe  envs purge` command allows you to purge the domain cache for a specified application environment.

## Options

| Name, shorthand | Description      |
|:----------------|:-----------------|
| `--app, -a`     | The app name     |
| `--help, -h`    | Help for purge   |

## Examples

Let's assume the environment ID is `bmna3gedlzerwcb4vc04gssl` and the app name is `myapp`. Running the following command will purge the domain cache for environment:

```bash
$ wpe envs purge bmna3gedlzerwcb4vc04gssl -a myapp
```

## Parent Command
| Command                                         | Description               |
|:------------------------------------------------|:--------------------------|
| [wpe envs](/reference/cli/wpe/envs) | The base command for envs |
