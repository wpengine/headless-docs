# wpe alpha apps create

## Description
Create a new WP Engine Headless Application

## Usage

```bash
$ wpe alpha apps create [OPTIONS]
```

## Extended Description

The `wpe alpha apps create` command allows you to create a new WP Engine Headless Application. You provide the GitHub repository you want to use, the environments you want to deploy, and the name of your app. Running the command will deploy the code from your repository to the corresponding environments.

The `repository` is a reference to your GitHub repository. For example, if your GitHub repository is `https://github.com/organization/myapp` then the value your use for `repository` will be `organization/myapp`.

The `environments` correspond to the WP Engine User Portal environments where you have your WP site. So if your domain is `myapp.wpengine.com`, your environment would be `myapp`.

## Options

| Name, shorthand      | Description                                                                                          |
|:---------------------|:-----------------------------------------------------------------------------------------------------|
| `--environments, -e` | Environments in JSON format (use with -n, -r flags; surround value with single quotation marks)      |
| `--filepath, -f`     | Path to file with JSON of the app to create (use without -e, -n, -r flags)                           |
| `--help, -h`         | Help for create                                                                                      |
| `--name, -n`         | Assign a name to the app (optional use with -e, -r flags)                                            |
| `--repo, -r`         | GitHub repo associated with the app (use with -e, -n flags)                                          |

## Examples

### Create With A wpe.json File

The simplest way to create your new app is by configuring a `wpe.json` file with the variables necessary to deploy the application. Something like the following:

```json
{
  "name": "myapp",
  "repo": "organization/myapp",
  "environments": [
    {
      "name": "Production",
      "branch": "main",
      "wp_environment_name": "YOUR WordPress environment name",
      "env_variables": [
        {
          "key": "WP_URL",
          "value": "https://yoururl"
        }
      ]
    }
  ]
}
```

With the above file created, you can deploy your app with a single command:

```bash
$ wpe alpha apps create -f wpe.json
```

## Parent Command
| Command                                         | Description                                         |
|:------------------------------------------------|:----------------------------------------------------|
| [wpe alpha apps](/reference/cli/wpe/alpha/apps) | The base command for interacting with your WPE apps |

## Further Reading

- [Create Your First App](/guides/getting-started/create-app)
