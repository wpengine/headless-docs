package main

import (
	"log"

	"github.com/spf13/cobra/doc"
	"github.com/wpengine/headless/cmd/cli/cmd"
)

func main() {

	err := doc.GenMarkdownTree(cmd.GetRootCommand(), "./")
	if err != nil {
		log.Fatal(err)
	}
}
