
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
