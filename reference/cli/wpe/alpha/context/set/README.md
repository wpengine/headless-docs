# wpe alpha context set

## Description
Set the account context for the WP Engine Headless CLI.

## Usage

```bash
$ wpe alpha context set account [ACCOUNT_NAME]
```

## Extended Description

The `wpe alpha context set account` command allows you to set the account context that the WP Engine Headless CLI will use to deploy applications.

## Options

| Name, shorthand     | Description  |
|:--------------------|:-------------|
| `--help, -h`        | Help for set |

## Examples

```bash
$ wpe alpha context set account myaccount
```

The above command will set the current account context that the WP Engine Headless CLI will use to deploy applications to `myaccount`

## Parent Command
| Command                                               | Description                  |
|:------------------------------------------------------|:-----------------------------|
| [wpe alpha context](/reference/cli/wpe/alpha/context) | The base command for context |
