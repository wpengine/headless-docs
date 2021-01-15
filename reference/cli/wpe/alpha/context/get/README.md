# wpe alpha context get

## Description
Get the account context for the WP Engine Headless CLI.

## Usage

```bash
$ wpe alpha context get [OPTIONS]
```

## Extended Description

The `wpe alpha context get` command will print the current account context that the WP Engine Headless CLI is using to deploy applications.

## Options

| Name, shorthand     | Description  |
|:--------------------|:-------------|
| `--help, -h`        | Help for get |

## Examples

```bash
$ wpe alpha context get
```

The above command will print something similar to the following:

```bash
ACCOUNT
myaccount
```

## Parent Command
| Command                                               | Description                  |
|:------------------------------------------------------|:-----------------------------|
| [wpe alpha context](/reference/cli/wpe/alpha/context) | The base command for context |
