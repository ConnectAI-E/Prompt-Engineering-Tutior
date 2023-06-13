package initialization

import "github.com/spf13/viper"

type Config struct {
	OpenAi string
}

var config *Config

func LoadConfig(cfg string) *Config {
	viper.SetConfigFile(cfg)
	viper.ReadInConfig()
	viper.AutomaticEnv()
	config = &Config{
		OpenAi: getViperStringValue("OPENAI_TOKEN", ""),
	}
	return config
}

func GetConfig() *Config {
	return config
}

func getViperStringValue(key string, defaultValue string) string {
	value := viper.GetString(key)
	if value == "" {
		return defaultValue
	}
	return value
}
