# WP Engine Headless Platform Documentation

WP Engine Headless Documentation for Developers

- [Getting Started](./guides/getting-started/)
- [Troubleshooting](./guides/troubleshooting/)

## Installation

<!--
```bash
# TBD
npm i @wpengine/headless-cli
``` -->

- Download the CLI for macOS [here](https://drive.google.com/file/d/1i5dgrFjt03McPYI8gMhi1IZx-tfZnTdo/view).

The following instructions are needed until the CLI is distributed to npm:

- Unzip the files
- Open a terminal window and navigate to the unzipped folder
- Run `chmod 777 wpe` to allow the binary to be executed
- Move the binary (`wpe`) to `/usr/local/bin`
  - `mv wpe /usr/local/bin`
- Move `config.yaml` to `~/.wpe`
  - First create the `.wpe` folder
  - Then move the file (`mv config.yaml ~/.wpe`)
- Try to run `wpe`
  - This will fail because the binary isn't signed
- Go to System Preference->Security and Privacy and allow the CLI to execute

Finally, to validate installation, run:

```bash
wpe --help
```

You should see something like:

```
Command-line interface for WP Engine Headless Apps that allows
you to configure and monitor your node based applications.

Usage:
  wpe [command]

Available Commands:
  alpha       Alpha versions of wpeh commands
  completion  Generates shell completion scripts
  help        Help about any command

Flags:
      --config string   config file (default is $HOME/.wpe/config.yaml)
  -d, --debug           print logs
  -h, --help            help for wpeh
  -v, --version         version for wpeh

Use "wpeh [command] --help" for more information about a command.
```
