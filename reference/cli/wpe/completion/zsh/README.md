# wpe completion zsh

## Description
Print completions for zsh.

## Usage

```bash
$ wpe completion zsh [OPTIONS]
```

## Extended Description

The `wpe completion zsh` command will print tab completion configuration for zsh. If shell completion is not already enabled in your environment you will need to enable it by running the following command:

```bash
$ echo "autoload -U compinit; compinit" >> ~/.zshrc
```

To load completions for each session run the following command once:

```bash
$ wpe completion zsh > "${fpath[1]}/_wpe"
```

## Options

| Name, shorthand     | Description  |
|:--------------------|:-------------|
| `--help, -h`        | Help for zsh |

## Parent Command
| Command                                         | Description                     |
|:------------------------------------------------|:--------------------------------|
| [wpe completion](/reference/cli/wpe/completion) | The base command for completion |
