# wpe envs delete

## Description
Remove a deployed environment from an application.

## Usage

```bash
$ wpe envs delete $ENV_ID [OPTIONS]
```

## Extended Description

The `wpe  envs delete` command will remove an existing deployed environment from an application.

## Options

| Name, shorthand | Description     |
|:----------------|:----------------|
| `--app, -a`     | The app name    |
| `--help, -h`    | Help for delete |

## Examples

Let's assume the environment ID is `bmna3gedlzerwcb4vc04gssl` and the app name is `myapp`. Running the following command will delete the environment:

```bash
$ wpe envs delete bmna3gedlzerwcb4vc04gssl -a myapp
```

## Parent Command
| Command                                         | Description               |
|:------------------------------------------------|:--------------------------|
| [wpe  envs](/reference/cli/wpe/main/envs) | The base command for envs |
