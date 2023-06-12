
<div align="center">
	<a href='https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction' target="_blank" rel="noopener noreferrer">
	<img src="https://user-images.githubusercontent.com/50035229/235389663-fed583ca-7297-4385-88b9-3587baaed90b.png" width="800" >
	</a>
	<h1>🎡提示词工程师入门指南</h1>
	<p>
		<b>👏🏻欢迎PR & Star，让更多人了解<strong> 提示词工程师 </strong> 👏🏻</b>
	</p>
	<br>
	<br>
	<br>
</div>



## 介绍

🥐 参考视频课程：[ChatGPT Prompt Engineering for Developers](https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction)

🍔 中文字幕搬运：[ChatGPT提示工程师｜AI大神吴恩达教你写提示词](https://www.bilibili.com/video/BV1AT41187qt)

🥪 实现语言：Python、Golang、NodeJs

🍗 语料语言：英文、中文

## 代码
| 资料     | 语料                                                                                                                                                 |
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| 教学视频   | <a href="https://www.bilibili.com/video/BV1No4y1t7Zn">中✅</a>、<a href="https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/2/guidelines">英✅</a> |
| Python | <a href="#">中❌</a>、<a href="./python/en/guidelines.ipynb">英✅</a>                                                                                   |
| NodeJS | <a href="#">中❌</a>、<a href="./nodejs/en/readme.md">英✅</a>                                                                                                             
| Golang | <a href="#">中❌</a>、<a href="./golang/en/guidelines.go">英✅</a>                                                                                      |



## 正文

### Guidelines 总体准则

LLM分成两个基本大类：Base-LLM和Instruction-Tuned-LLM。

前者是基础语言模型，基于预训练数据预测下一个单词。后者则针对指令进行微调，使其更可能完成人类的指令。

OpenAI的模型中，InstructGPT Models 列出了针对指令优化的模型。表格中也列出了不同的指令微调训练方法，如SFT、FeedME、PPO等。

编写指令的准则包括：

- 清晰和具体，但不一定要短。
- 使用定界符如"""、```、---、<>、。以防止prompt注入，给LLM产生混乱的理解。
- 使用结构化输出，如要求以HTML或JSON格式输出。
- 要求检查：要求LLM先检查是否满足某个条件后再进行输出，如果条件不满足可以直接告知。
- 利用少样本学习，展示一个期望的例子给LLM。
- 给模型一些思考时间，不要给它过于简单或困难的问题。
- 按步骤来解答，设定分隔符，例如使用"Text:<>"来表示文本。
- 让模型自己推导出过程，而不仅仅是结果。展示一个带有解题过程的例子给LLM。
- 避免模型产生幻觉：要告诉模型先查找相关资料，再根据相关资料来回答问题。（但模型产生幻觉很难避免，也是目前模型研究领域努力的方向）

### Iterative Prompting 迭代提示词

编写Prompt的过程是不断迭代的。

基本步骤：
- 编写Prompt
- 进行测试，
- 分析原因
- 修订Prompt（澄清思路）
- 循环上述步骤，直到达到满意的结果为止。

### Summarizing 总结能力
如果你经营一个电商网站，其中包含大量用户评论，你可以利用语言模型的"总结（summarize）"和"提取信息（extract）"的能力来简化你的工作量。

使用LLM，你可以进行一系列的测试，如限制字数、限定主题、关注价格，并尝试用提取信息的方式替代总结。

你还可以利用一个for循环，使用相同的提示模板来批量处理不同的内容。这样做可以帮助你更高效地处理大量评论。

### Inferring 逻辑推理
如果您想在用户评论中了解积极反馈和消极反馈的数量，那么您就需要使用"LLM推理"的能力。

举例来说，LLM能够推理用户的情绪（sentiment），识别情绪类型（比如：happy、satisfied、grateful、impressed、content），提取品牌和商品信息并以JSON格式输出，还可以同时执行多个任务（例如提取用户评论中的商品并推理用户的情绪），推断主题，并基于推断的主题设计一个提醒程序等。

因此，在用户评论中应用"LLM推理"的能力能够帮助您准确地了解积极反馈和消极反馈的情况。

### Transforming 内容转换
转换类应用是一种将一种语言转换为另一种语言的应用。

例如，通过转换类应用，可以将一段文字翻译成另一种语言，识别一段文字所使用的语言，甚至同时将文本翻译成两种以上的语言。此外，还可以指定转换的语气是正式还是非正式的，指定适用于不同场合的语言，比如商务场合的邮件。转换类应用不仅限于自然语言的翻译，还可以进行程序语言的转换，例如将JSON转换为HTML。同时，您还可以要求LLM帮助您纠正语法错误。

### Expanding 文本扩展
LLM具备将简短文字扩展并添加修饰以及融入特定语言风格的能力。

在下面的示例中，LLM充当了一个邮件回复助手的角色。您可以要求LLM撰写一封回复客户的邮件，并让它利用客户来信中的详细信息，以增加回复的真实感。此外，您还可以通过调整温度值来使回复显得不那么呆板。

通过利用LLM的功能，您可以获得一封根据客户来信细节编写的回复邮件，同时也能根据需要灵活调整回复的语气。这使得与客户的邮件沟通更加个性化和真实。

### Chatbot 对话Bot
在使用OpenAI API发送消息时，消息中的角色可以包括系统（system）、用户（user）和助手（assistant）三种角色。

系统角色（system）用于设定全局的风格和限制等信息。

用户角色（user）表示人类用户，即发送消息的真实用户。

助手角色（assistant）表示LLM，即语言模型，在对话中扮演回复和交互的角色。
```bush
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]

def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, # this is the degree of randomness of the model's output
    )
#     print(str(response.choices[0].message))
    return response.choices[0].message["content"]

messages =  [  
{'role':'system', 'content':'You are an assistant that speaks like Shakespeare.'},    
{'role':'user', 'content':'tell me a joke'},   
{'role':'assistant', 'content':'Why did the chicken cross the road'},   
{'role':'user', 'content':'I don\'t know'}  ]

response = get_completion_from_messages(messages, temperature=1)
print(response)

```


### Conclusion 结论
在以下说明中，我们将讨论一些原则和能力相关的事项。

一、原则：

1. 指令要求清晰和具体，确保模型明确了解您的要求。

2. 给予模型一些时间进行思考和处理。

二、提示的开发过程是一个持续迭代的过程，需要不断进行调试和改进。

三、模型具备以下能力：总结、推理、转换和扩展。这些能力可以在不同的应用场景中发挥作用。





