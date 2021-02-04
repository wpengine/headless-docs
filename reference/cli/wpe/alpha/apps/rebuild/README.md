# wpe alpha apps rebuild

## Description
Rebuild an existing WP Engine Headless Applications

## Usage

```bash
$ wpe alpha apps rebuild $APP_NAME [OPTIONS]
```

## Extended Description

The `wpe alpha apps rebuild` command will rebuild a specified WP Engine Headless Application. Use the [`wpe alpha apps list`](/reference/cli/wpe/alpha/apps/list) command to get a list of the apps you can rebuild.

## Options

| Name, shorthand | Description      |
|:----------------|:-----------------|
| `--help, -h`    | Help for rebuild |

## Examples

### Rebuild "myapp"
```bash
$ wpe alpha apps rebuild myapp
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe alpha apps](/reference/cli/wpe/alpha/apps) | The base command for interacting with your WPE apps |
