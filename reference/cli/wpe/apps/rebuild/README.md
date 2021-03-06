# wpe apps rebuild

## Description
Rebuild an existing WP Engine Headless Applications

## Usage

```bash
$ wpe apps rebuild $APP_NAME [OPTIONS]
```

## Extended Description

The `wpe  apps rebuild` command will rebuild a specified WP Engine Headless Application. Use the [`wpe  apps list`](/reference/cli/wpe//apps/list) command to get a list of the apps you can rebuild.

## Options

| Name, shorthand | Description      |
|:----------------|:-----------------|
| `--help, -h`    | Help for rebuild |

## Examples

### Rebuild "myapp"
```bash
$ wpe apps rebuild myapp
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe apps](/reference/cli/wpe/apps) | The base command for interacting with your WPE apps |
