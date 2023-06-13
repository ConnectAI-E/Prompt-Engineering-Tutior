import {getCompletion} from '../utill';

const text = `
在一个迷人的村庄中，兄妹杰克和吉尔踏上了从山顶井里取水的任务。当他们欢快地唱着攀登时，不幸降临了——杰克在一块石头上绊倒并滚下了山坡，吉尔紧随其后。尽管略有擦伤，他们依然安然返回家中得到了温暖的拥抱。尽管发生了这次不幸，他们的冒险精神依然不减，他们继续愉快地探索着。
`

const instructionPrompt = `
执行以下操作：
1 - 用一句话总结由<>括起来的以下文本。
2 - 将总结翻译成法语。
3 - 列出法语总结中的每个名字。
4 - 输出一个包含以下键的JSON对象：french_summary（法语总结）、num_names（名字数量）。

使用以下格式：
文本： <要总结的文本>
总结： <总结>
翻译： <总结的翻译>
名字： <法语总结中的名字列表>
输出JSON： <包含总结和名字数量的JSON对象>

文本： <${text}>
`
export const specifySteps = () => {
    return getCompletion(instructionPrompt)
}
