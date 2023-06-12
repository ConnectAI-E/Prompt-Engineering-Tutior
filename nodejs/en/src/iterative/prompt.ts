import * as fs from 'fs';

const fact_sheet = fs.readFileSync('src/iterative/fact_sheet.txt', 'utf8');
export const promptRaw = `
Your task is to help a marketing team create a 
description for a retail website of a product based 
on description.
Write a product description based on the information 
provided in the technical specifications delimited by 
<>.
Technical specifications: <${ fact_sheet }>
`

//- Limit the number of words/sentences/characters.
export const promptLimitLength = `
Your task is to help a marketing team create a 
description for a retail website of a product based 
on description.

Use at most 50 words.

Write a product description based on the information 
provided in the technical specifications delimited by 
<>.
Technical specifications: <${ fact_sheet }>
`

export const promptFocusDetail = `
Your task is to help a marketing team create a 
description for a retail website of a product based 
on description.

The description is intended for furniture retailers, 
so should be technical in nature and focus on the 
materials the product is constructed from.

At the end of the description, include every 7-character 
Product ID in the technical specification.

Use at most 50 words.

Write a product description based on the information 
provided in the technical specifications delimited by 
<>.
Technical specifications: <${ fact_sheet }>
`


export const promptShowHtml = `
Your task is to help a marketing team create a 
description for a retail website of a product based 
on description.

The description is intended for furniture retailers, 
so should be technical in nature and focus on the 
materials the product is constructed from.

At the end of the description, include every 7-character 
Product ID in the technical specification.

After the description, include a table that gives the 
product's dimensions. The table should have two columns.
In the first column include the name of the dimension. 
In the second column include the measurements in inches only.

Give the table the title 'Product Dimensions'.

Format everything as HTML that can be used in a website. 
Place the description in a <div> element.

Write a product description based on the information 
provided in the technical specifications delimited by 
<>.
Technical specifications: <${ fact_sheet }>
`


