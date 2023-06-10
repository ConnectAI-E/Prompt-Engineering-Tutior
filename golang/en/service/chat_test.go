package service

import (
	"os"
	"testing"
)

func TestChatGpt_getCompletion(t *testing.T) {
	type fields struct {
		OpenAI string
	}
	type args struct {
		content string
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		want   string
	}{
		{
			name: "test-chat",
			fields: fields{
				OpenAI: os.Getenv("OPENAI_TOKEN"),
			},
			args: args{
				content: "hello",
			},
			want: "",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			c := ChatGpt{
				OpenAI: tt.fields.OpenAI,
			}
			got := c.GetCompletion(tt.args.content)
			if len(got) == 0 {
				t.Errorf("getCompletion() = %v, want %v", got, tt.want)
			}
		})
	}
}
