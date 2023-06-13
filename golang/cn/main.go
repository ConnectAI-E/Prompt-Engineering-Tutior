package main

import (
	"github.com/connectai-e/prompt-engineering-tutior/en/initialization"
	"github.com/connectai-e/prompt-engineering-tutior/en/service"
)

var chat *service.ChatGpt

func CommonLoad() {
	initialization.LoadConfig("config.yaml")
	chat = service.InitChatGpt(*initialization.GetConfig())
}
