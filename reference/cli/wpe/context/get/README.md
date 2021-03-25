# wpe context get

## Description
Get the account context for the WP Engine Headless CLI.

## Usage

```bash
$ wpe context get [OPTIONS]
```

## Extended Description

The `wpe context get` command will print the current account context that the WP Engine Headless CLI is using to deploy applications.

## Options

| Name, shorthand     | Description  |
|:--------------------|:-------------|
| `--help, -h`        | Help for get |

## Examples

```bash
$ wpe context get
```

The above command will print something similar to the following:

```text
ACCOUNT
myaccount
```

## Parent Command
| Command                                               | Description                  |
|:------------------------------------------------------|:-----------------------------|
| [wpe context](/reference/cli/wpe/context) | The base command for context |
