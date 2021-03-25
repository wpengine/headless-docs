# wpe apps delete

## Description
Remove an WP Engine Headless Application

## Usage

```bash
$ wpe apps delete $APP_NAME [OPTIONS]
```

## Extended Description

The `wpe  apps delete` command allows you to remove an existing WP Engine Headless Application. Use the [`wpe  apps list`](/reference/cli/wpe//apps/list) command to get a list of the apps that you can delete. By default, this command will prompt you to re-enter the app name to ensure you are deleting the right app. You can override this with `--force`, which is useful if you are using automation to delete the app.

>> **NOTE:** Once you delete an app you can no longer create a new app with the same name, since apps need to have unique names

## Options

| Name, shorthand | Description                     |
|:----------------|:--------------------------------|
| `--force`       | Force delete, avoid all prompts |
| `--help, -h`    | Help for delete                 |

## Examples

### Delete "myapp"

```bash
$ wpe apps delete myapp
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe apps](/reference/cli/wpe/apps) | The base command for interacting with your WPE apps |
