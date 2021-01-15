# wpe completion bash

## Description
Print completions for bash.

## Usage

```bash
$ wpe completion bash [OPTIONS]
```

## Extended Description

The `wpe completion bash` command will print tab completion configuration for bash. Use this to pipe to a bash completion file as follows:

On Linux:
```bash
$ wpe completion bash > /etc/bash_completion.d/wpe
```

On MacOS:
```bash
$ wpe completion bash > /usr/local/etc/bash_completion.d/wpe
```

## Options

| Name, shorthand     | Description   |
|:--------------------|:--------------|
| `--help, -h`        | Help for bash |

## Parent Command
| Command                                         | Description                     |
|:------------------------------------------------|:--------------------------------|
| [wpe completion](/reference/cli/wpe/completion) | The base command for completion |
