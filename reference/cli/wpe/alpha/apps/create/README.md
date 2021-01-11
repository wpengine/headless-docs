# wpe alpha apps create

## Description
Create a new WP Engine Headless Application

## Usage

```bash
wpe alpha apps create [OPTIONS]
```

## Extended Description

The `wpe alpha apps create` command allows you to create a new WP Engine Headless Application. You provide the GitHub repository you want to use, the environments you want to deploy, and the name of your app. Running the command will deploy the code from your repository to the corresponding environments.

The `repository` is a reference to your GitHub repository. For example, if your GitHub repository is `https://github.com/organization/mysite` then the value your use for `repository` will be `organization/mysite`.

The `environments` correspond to the WP Engine User Portal environments where you have your WP site. So if your domain is `mysite.wpengine.com`, your environment would be `mysite`.

## Options

| Name, shorthand | Default | Description                                                                                |
|:----------------|:--------|:-------------------------------------------------------------------------------------------|
| `--environments, -e` | Environments in JSON format (use with -n, -r flags; surround value with single quotation marks) |
| `--filepath, -f`     | Path to file with JSON of the app to create (use without -e, -n, -r flags)                      |
| `--help, -h`         | help for create                                                                                 |
| `--name, -n`         | Assign a name to the app (optional use with -e, -r flags)                                       |
| `--repo, -r`         | GitHub repo associated with the app (use with -e, -n flags)                                     |

## Examples

[Create Your First App](/guides/getting-started/create-app)

## Parent Command
| Command | Description                                                                              |
|:--------|:-----------------------------------------------------------------------------------------|
| [wpe](/reference/cli/wpe/)                  | The base command for the WPE CLI                     |