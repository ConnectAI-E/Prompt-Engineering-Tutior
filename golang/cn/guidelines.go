package main

import (
	"fmt"
)

func SummaryContent() {
	text := `
	您应该通过提供尽可能明确和具体的指示来表达您希望模型完成的任务。这将引导模型朝着所期望的输出方向发展，并减少接收到无关或不正确回答的可能性。不要将编写清晰的提示与编写简短的提示混淆。在许多情况下，较长的提示可以为模型提供更多的清晰度和背景信息，从而产生更详细和相关的输出。
`

	prompt := fmt.Sprintf(`
	将由分割线分隔的文本进行总结，生成一句话。

	---
	%s
	---
	
	摘要：`,
		text)
	response := chat.GetCompletion(prompt)
	fmt.Println(response)
}

func PrettyJson() {
	prompt := `
	生成三本虚构书籍的标题，以及它们的作者和流派。以JSON格式提供，使用以下键：book_id（书籍ID）、title（标题）、author（作者）、genre（流派）。上述任务用中文表达。
`

	response := chat.GetCompletion(prompt)
	fmt.Println(response)

}

func GenSteps() {
	text := `
	泡一杯茶很简单！首先，你需要把一些水烧开。在这个过程中， 拿一个杯子，把一个茶包放进去。一旦水足够热，就把水倒在茶包上。 让茶浸泡片刻。几分钟后，取出茶包。如果你喜欢，可以加入适量的糖或牛奶调味。 就这样！你现在有一杯美味的茶可以享用了。`
	prompt := fmt.Sprintf("您将获得由三个双引号分隔的文本。如果文本包含一系列指令，"+
		" \n如果文本包含一系列指令，"+
		" 请按以下格式重新编写这些指令："+
		"步骤1 - ..."+
		"步骤2 - …"+
		"…\n步骤n "+
		"如果文本不包含一系列指令，"+
		"则简单地写上 \\\"未提供步骤。\\\"\n```%s```", text)
	response := chat.GetCompletion(prompt)
	fmt.Println(response)
}

func GenStepsOption() {
	text := `
	今天阳光明媚，鸟儿在歌唱。这是一个美丽的日子，适合在公园散步。花朵盛开，树木在微风中轻轻摇曳。人们外出享受着美好的天气。有些人在野餐，有些人在玩游戏，还有些人只是在草地上放松。这是一个完美的日子，可以在户外度过时间，欣赏大自然的美丽。`

	prompt := fmt.Sprintf(`
	您将获得由三个双引号分隔的文本。如果文本中包含一系列指令，请按以下格式重新编写这些指令：

	步骤1 - ...
	步骤2 - ...
	...
	步骤N - ...
	
	如果文本中不包含一系列指令，则简单地写上"未提供步骤"。

	"""%s"""`,
		text)

	response := chat.GetCompletion(prompt)
	fmt.Println(response)
}

func FewShot() {
	prompt := `
	你的任务是以一致的风格回答。

	<child>: 教教我关于耐心。

	<grandparent>: 开凿最深峡谷的河流源于一处谦逊的泉水；最壮丽的交响乐从一声独奏开始；最复杂的织锦由一根孤寂的线缝制而成。

	<child>: 教教我关于韧性。`
	response := chat.GetCompletion(prompt)
	fmt.Println(response)
}

// SpecifySteps Specify the steps required to complete a task
func SpecifySteps() {
	text := `
	在一个迷人的村庄中，兄妹杰克和吉尔踏上了从山顶井里取水的任务。当他们欢快地唱着攀登时，不幸降临了——杰克在一块石头上绊倒并滚下了山坡，吉尔紧随其后。尽管略有擦伤，他们依然安然返回家中得到了温暖的拥抱。尽管发生了这次不幸，他们的冒险精神依然不减，他们继续愉快地探索着。
`

	prompt := fmt.Sprintf(`
	执行以下操作：
	1 - 使用一句话对由三个反引号括起来的以下文本进行总结。
	2 - 将总结翻译成法语。
	3 - 在法语总结中列出每个名字。
	4 - 输出一个包含以下键的 JSON 对象：french_summary（法语总结）、num_names（名字数量）。

	请使用换行符分隔您的答案。

	文本：
	___
	%s
	___
	`, text)

	response := chat.GetCompletion(prompt)
	fmt.Println(response)

}

// SpecifyOutput Ask for output in a specified format
func SpecifyOutput() {
	text := `在一个迷人的村庄中，兄妹杰克和吉尔踏上了从山顶井里取水的任务。当他们欢快地唱着攀登时，不幸降临了——杰克在一块石头上绊倒并滚下了山坡，吉尔紧随其后。尽管略有擦伤，他们依然安然返回家中得到了温暖的拥抱。尽管发生了这次不幸，他们的冒险精神依然不减，他们继续愉快地探索着。`

	prompt := fmt.Sprintf(`
	你的任务是执行以下操作：
	1 - 用一句话总结用尖括号<>分隔的以下文本。
	2 - 将总结翻译成法语。
	3 - 在法语总结中列出每个人的名字。
	4 - 输出一个包含以下键的 JSON 对象：french_summary（法语总结）、num_names（名字数量）。

	使用以下格式：
	文本： <要总结的文本>
	总结： <总结>
	翻译： <总结的翻译>
	名字： <意大利总结中的名字列表>
	输出 JSON： <包含总结和名字数量的 JSON>

	文本：<%s>
`, text)

	response := chat.GetCompletion(prompt)
	fmt.Println(response)
}

func MathSolution() {
	prompt := `
	你的任务是确定学生的解决方案是否正确。
	要解决这个问题，请按照以下步骤进行：
- 首先，自己解决这个问题。
- 然后将你的解决方案与学生的解决方案进行比较，并评估学生的解决方案是否正确。
在自己完成这个问题之前，不要决定学生的解决方案是否正确。

使用以下格式：
问题：
————
	问题在这里
————
学生的解决方案：
————
	学生的解决方案在这里
————
实际解决方案：
————
	计算解决方案的步骤和你的解决方案在这里
————
学生的解决方案与实际解决方案是否相同：
————
	是或否
————
学生的评分：
————
	正确或不正确
————

问题：
————
	我正在建设一个太阳能发电设施，我需要帮助计算财务数据。
	- 土地成本为每平方英尺100美元
	- 我可以以每平方英尺250美元的价格购买太阳能电池板
	- 我谈判达成的维护合同每年将花费固定的10万美元，以及每平方英尺10美元
	作为与平方英尺数量相关的第一年运营的总成本是多少。
	————
学生的解决方案：
	————
	设x为安装面积（平方英尺）。
	成本：
	1. 土地成本：100x
	2. 太阳能电池板成本：250x
	3. 维护成本：100,000 + 100x
	总成本：100x + 250x + 100,000 + 100x = 450x + 100,000
	————
实际解决方案：

`

	response := chat.GetCompletion(prompt)
	fmt.Println(response)
}
