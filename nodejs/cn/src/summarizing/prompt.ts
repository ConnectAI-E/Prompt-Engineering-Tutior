import * as fs from 'fs';
import exp from 'constants';


const reviewDemo = fs.readFileSync('src/summarizing/review/1.txt', 'utf8');
export  const promptLimitLength = `
您的任务是从电子商务网站生成一个产品评论的简短摘要。

请用尖括号< >将以下评论进行分隔。

摘要需限定在30个词以内。

评论内容：<${reviewDemo}>
`

export  const promptDetail1 = `
您的任务是从电子商务网站的产品评论中生成一个简短的摘要。

请用尖括号< >将以下评论进行分隔。

重点关注提及产品的运输和交付方面的内容。

摘要需限定在30个词以内。

评论内容：<${reviewDemo}>
`

export const promptDetail2 = `
您的任务是从电子商务网站的产品评论中生成一个简短的摘要。

请用尖括号< >将以下评论进行分隔。

重点关注与价格和感知价值相关的任何方面。

摘要需限定在30个词以内。

评论内容：<${reviewDemo}>
`

export const promptExtract = `
您的任务是从电子商务网站的产品评论中提取相关信息，以便向物流部门提供反馈。

请使用尖括号< >将以下评论进行分隔。

提取与运输和交付相关的信息。

限定在30个词以内。

评论内容：<${reviewDemo}>

`

export const genPromptShortSummary = (content:string)=>{return `
您的任务是从电子商务网站的产品评论中生成一个简短摘要。

请用尖括号< >将以下评论进行分隔。

摘要需限定在20个词以内。

评论内容：<${content}>
`}
