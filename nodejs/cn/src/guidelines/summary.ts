import {getCompletion} from '../utill';

const summaryText = `
你应该通过提供尽可能明确和具体的指令来表达你希望模型做什么。
这将引导模型朝着期望的输出方向发展，并降低收到无关或不正确回答的可能性。
不要将清晰的提示与简短的提示混淆。
在许多情况下，较长的提示可以为模型提供更多的清晰度和上下文，这可能会产生更详细和相关的输出。`;

const summary = () => {
    const delimeterOutputPrompt = `
将由<>符号扩起来的文本总结为一句话。
<${summaryText}>
`;

    return getCompletion(delimeterOutputPrompt);
};

export { summary };
