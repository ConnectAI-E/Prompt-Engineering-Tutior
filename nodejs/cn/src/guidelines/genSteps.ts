import {getCompletion} from '../utill';

const textWithInstructions = `
泡一杯茶很简单！首先，你需要把一些水烧开。在这个过程中， 拿一个杯子，把一个茶包放进去。一旦水足够热，就把水倒在茶包上。 让茶浸泡片刻。几分钟后，取出茶包。如果你喜欢，可以加入适量的糖或牛奶调味。 就这样！你现在有一杯美味的茶可以享用了。`

const checkConditionsPrompt = `
将提供由三个引号括起来的文本。如果文本中包含一系列指令，
请按以下格式重新书写这些指令：

第一步 - ...
第二步 - …
…
第 N 步 - …

如果文本中不包含一系列指令，
则简单地写上<未提供步骤。>

<${textWithInstructions}>`


export const genSteps = () => {
    return getCompletion(checkConditionsPrompt);
}
