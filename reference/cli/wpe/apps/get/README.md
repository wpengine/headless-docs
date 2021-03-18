# wpe apps get

## Description
Get information about an existing WP Engine Headless Application

## Usage

```bash
$ wpe apps get $APP_NAME [OPTIONS]
```

## Extended Description

The `wpe apps get` command provides information about an existing WP Engine Headless Application. Use the [`wpe  apps list`](/reference/cli/wpe//apps/list) command to get a list of the apps about which you can get information. This app will show you information about the app's environments as well as their deployment state. It will also list any existing environment variable names.

## Options

| Name, shorthand | Description  |
|:----------------|:-------------|
| `--help, -h`    | Help for get |

## Examples

### Get "myapp"

```bash
$ wpe apps get myapp
```

The above command will print something that looks like the following to the console:

```text
NAME                    REPO
myapp                   organization/myapp

ENVIRONMENT     BRANCH  URL                                                             ID                              STATE
Development     master  https://hbq5fb1hu43epj6apiu2enakm.js.wpenginepowered.com        bq5fb1hu43epj6apiu2enakm        deployed
ENVIRONMENT VARIABLES: WORDPRESS_URL
STATUS
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe apps](/reference/cli/wpe/apps) | The base command for interacting with your WPE apps |
