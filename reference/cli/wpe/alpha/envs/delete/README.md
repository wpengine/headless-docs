# wpe alpha envs delete

## Description
Remove a deployed environment from an application.

## Usage

```bash
$ wpe alpha envs delete $ENV_ID [OPTIONS]
```

## Extended Description

The `wpe alpha envs delete` command will remove an existing deployed environment from an application.

## Options

| Name, shorthand | Description     |
|:----------------|:----------------|
| `--app, -a`     | The app name    |
| `--help, -h`    | Help for delete |

## Examples

Let's assume the environment ID is `bmna3gedlzerwcb4vc04gssl` and the app name is `myapp`. Running the following command will delete the environment:

```bash
$ wpe alpha envs delete bmna3gedlzerwcb4vc04gssl -a myapp
```

## Parent Command
| Command                                         | Description               |
|:------------------------------------------------|:--------------------------|
| [wpe alpha envs](/reference/cli/wpe/alpha/envs) | The base command for envs |
