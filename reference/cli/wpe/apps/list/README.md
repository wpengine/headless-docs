# wpe apps list

## Description
List all existing WP Engine Headless Applications

## Usage

```bash
$ wpe apps list [OPTIONS]
```

## Extended Description

The `wpe apps list` command will print a list of all the WP Engine Headless Applications you can access. It is useful when trying to use other [wpe apps](/reference/cli/wpe//apps) commands.

## Options

| Name, shorthand | Description   |
|:----------------|:--------------|
| `--help, -h`    | Help for list |

## Examples

```bash
$ wpe apps list
```

The above command will print something that looks like the following to the console:

```text
NAME                    REPO
cosmic_seal             organization/repo
dapper_penguin          organization/repo
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe apps](/reference/cli/wpe/apps) | The base command for interacting with your WPE apps |
