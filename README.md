# WP Engine Headless Platform Documentation

WP Engine Headless Documentation for Developers

- [Getting Started](./guides/getting-started/)

## Installation

<!--
```bash
# TBD
npm i @wpengine/headless-cli
``` -->

- Download the CLI [here](https://drive.google.com/file/d/1e95w-nSSFxZMnt4G-fByXJCmTdmNhavO/view?usp=sharing).
- The binary isn't signed, so you'll need to enable it in System Preferences->Security. It probably won't show up there until you attempt to run it.
- Run `chmod +x wpe` on the binary after you unzip it
- Copy the binary to `/usr/local/bin`
- Move the config.yaml file to the folder `~/.wpe`

To validate installation, run:

```bash
wpe --help
```

It should show something like:
```
Command-line interface for WP Engine Headless Apps that allows
you to configure and monitor your node based applications.

Usage:
  wpeh [command]

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
