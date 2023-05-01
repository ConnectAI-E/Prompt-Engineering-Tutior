package service

import (
	"context"
	"fmt"
	"github.com/connectai-e/prompt-engineering-tutior/en/initialization"
	openai "github.com/sashabaranov/go-openai"
)

type ChatGpt struct {
	OpenAI string
}

func InitChatGpt(config initialization.Config) *ChatGpt {
	return &ChatGpt{
		OpenAI: config.OpenAi,
	}
}
func (c ChatGpt) GetCompletion(content string) string {
	client := openai.NewClient(c.OpenAI)
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Temperature: 0,
			Model:       openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: content,
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return ""
	}

	return resp.Choices[0].Message.Content

}
