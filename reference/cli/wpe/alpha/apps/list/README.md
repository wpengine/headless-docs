# wpe alpha apps list

## Description
List all existing WP Engine Headless Applications

## Usage

```bash
$ wpe alpha apps list [OPTIONS]
```

## Extended Description

The `wpe alpha apps list` command will print a list of all the WP Engine Headless Applications you can access. It is useful when trying to use other [wpe alpha apps](/reference/cli/wpe/alpha/apps) commands.

## Options

| Name, shorthand | Description   |
|:----------------|:--------------|
| `--help, -h`    | Help for list |

## Examples

```bash
$ wpe alpha apps list
```

The above command will print something that looks like the following to the console:

```bash
NAME                    REPO
cosmic_seal             organization/repo
dapper_penguin          organization/repo
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe alpha apps](/reference/cli/wpe/alpha/apps) | The base command for interacting with your WPE apps |
