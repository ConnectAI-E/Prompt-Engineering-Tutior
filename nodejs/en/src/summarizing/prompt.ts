import * as fs from 'fs';
import exp from 'constants';


const reviewDemo = fs.readFileSync('src/summarizing/review/1.txt', 'utf8');
export  const promptLimitLength = `
Your task is to generate a short summary of a product \\
review from an ecommerce site. 

Summarize the review below, delimited by <>. 

in at most 30 words. 

Review: <${reviewDemo}>
`

export  const promptDetail1 = `
Your task is to generate a short summary of a product 
review from an ecommerce site. 

Summarize the review below, delimited by <>. 

focusing on any aspects that mention shipping and delivery of the product. 

in at most 30 words. 

Review: <${reviewDemo}>
`

export const promptDetail2 = `
Your task is to generate a short summary of a product 
review from an ecommerce site. 

Summarize the review below, delimited by <>. 

focusing on any aspects that are relevant to the price and perceived value.

in at most 30 words. 

Review: <${reviewDemo}>
`

export const promptExtract = `
Your task is to extract relevant information from 
a product review from an ecommerce site to give 
feedback to the Shipping department. 

From the review below, delimited by <>
 
extract the information relevant to shipping and 
delivery.

Limit to 30 words. 

Review: <${reviewDemo}>

`

export const genPromptShortSummary = (content:string)=>{return `
 Your task is to generate a short summary of a product 
 review from an ecommerce site. 
    
Summarize the review below, delimited by <>
in at most 20 words. 

Review: <${content}>
`}
