import {getCompletion} from '../utill';

const structuredOutputPrompt = `
生成三本虚构书籍的标题，以及它们的作者和流派。以JSON格式提供，使用以下键：book_id（书籍ID）、title（标题）、author（作者）、genre（流派）。上述任务用中文表达。`

export const prettyJson = () => {
    return getCompletion(structuredOutputPrompt);
}
