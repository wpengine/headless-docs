# wpe alpha apps get

## Description
Get information about a WP Engine Headless Application

## Usage

```bash
$ wpe alpha apps get [APPNAME] [OPTIONS]
```

## Extended Description

The `wpe alpha apps get` command provides information about an existing WP Engine Headless Application. Use the [`wpe alpha apps list`](/reference/cli/wpe/alpha/apps/list) command to get a list of the apps about which you can get information. This app will show you information about the app's environments as well as their deployment state. It will also list any existing environment variable names.

## Options

| Name, shorthand | Default | Description     |
|:----------------|:--------|:----------------|
| `--help, -h`  | Help for get                |

## Examples

### Get "myapp"

```bash
$ wpe alpha apps get myapp
```

The above command will print something that looks like the following to the console:

```bash
NAME                    REPO
myapp                   organization/myapp

ENVIRONMENT     BRANCH  URL                                                             ID                              STATE
Development     master  https://hbq5fb1hu43epj6apiu2enakm.js.wpenginepowered.com        bq5fb1hu43epj6apiu2enakm        deployed
ENVIRONMENT VARIABLES: WP_URL
STATUS
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe alpha apps](/reference/cli/wpe/alpha/apps) | The base command for interacting with your WPE apps |
