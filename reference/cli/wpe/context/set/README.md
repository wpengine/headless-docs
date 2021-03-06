# wpe context set

## Description
Set the account context for the WP Engine Headless CLI.

## Usage

```bash
$ wpe context set account $ACCOUNT_NAME
```

## Extended Description

The `wpe  context set account` command allows you to set the account context that the WP Engine Headless CLI will use to deploy applications.

## Options

| Name, shorthand     | Description  |
|:--------------------|:-------------|
| `--help, -h`        | Help for set |

## Examples

```bash
$ wpe context set account myaccount
```

The above command will set the current account context that the WP Engine Headless CLI will use to deploy applications to `myaccount`

## Parent Command
| Command                                               | Description                  |
|:------------------------------------------------------|:-----------------------------|
| [wpe context](/reference/cli/wpe/context) | The base command for context |
