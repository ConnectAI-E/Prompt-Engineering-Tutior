import * as fs from 'fs';

const fact_sheet = fs.readFileSync('src/iterative/fact_sheet.txt', 'utf8');
export const promptRaw = `
你的任务是帮助市场团队根据描述为零售网站的产品创建一个描述。
根据由<>括起来的技术规格信息编写产品描述。
技术规格：<${ fact_sheet }>
`

//- Limit the number of words/sentences/characters.
export const promptLimitLength = `
您的任务是根据描述帮助市场团队为零售网站上的产品创建一个描述。

使用最多50个词。

根据由<>括起来的技术规格信息编写产品描述。
技术规格：<${ fact_sheet }>
`

export const promptFocusDetail = `
您的任务是根据描述帮助市场团队为零售网站上的产品创建一个描述。

该描述面向家具零售商，因此应具有技术性质，并侧重于产品构造所使用的材料。

在描述末尾，包括技术规格中的每个7个字符的产品ID。

使用最多50个词。

根据由<>括起来的技术规格信息编写产品描述。
技术规格：<${ fact_sheet }>
`


export const promptShowHtml = `
您的任务是根据描述帮助市场团队为零售网站上的产品创建一个描述。

该描述面向家具零售商，因此应具有技术性质，并侧重于产品构造所使用的材料。

在描述末尾，包括技术规格中的每个7个字符的产品ID。

在描述之后，包括一个表格，显示产品的尺寸。该表格应该有两列。
在第一列中，包括尺寸的名称。在第二列中，只包括以英寸为单位的测量值。

给表格添加标题“产品尺寸”。

将所有内容格式化为可在网站中使用的HTML。生成的HTML包含完整的<head>和<body>,将描述放置在一个<div>元素中。

根据由<>括起来的技术规格信息编写产品描述。
技术规格：<${ fact_sheet }>
`


