
import * as fs from 'fs';

const review = fs.readFileSync('src/inferring/review.txt', 'utf8');
const story = fs.readFileSync('src/inferring/story.txt', 'utf8');

export const sentimentPrompt = `
What is the sentiment of the following product review, 
which is delimited with <>

Review text: <${review}>
`

export const sentimentPrompt2 = `
What is the sentiment of the following product review, 
which is delimited with <>

Give your answer as a single word, either "positive" 
or "negative".

Review text: <${review}>
`

export const Identifytypes = `
Identify a list of emotions that the writer of the \
following review is expressing. Include no more than \
five items in the list. Format your answer as a list of \
lower-case words separated by commas.

Review text: <${review}>
`

export const Identifyanger = `
Is the writer of the following review expressing anger?\
The review is delimited with <>. \
Give your answer as either yes or no.

Review text: <${review}>
`

export const Extract = `
Identify the following items from the review text: 
- Item purchased by reviewer
- Company that made the item

The review is delimited with <>. \
Format your response as a JSON object with \
"Item" and "Brand" as the keys. 
If the information isn't present, use "unknown" \
as the value.
Make your response as short as possible.
  
Review text: <${review}>
`

export const multipletasks = `
Identify the following items from the review text: 
- Sentiment (positive or negative)
- Is the reviewer expressing anger? (true or false)
- Item purchased by reviewer
- Company that made the item

The review is delimited with <>. \
Format your response as a JSON object with \
"Sentiment", "Anger", "Item" and "Brand" as the keys.
If the information isn't present, use "unknown" \
as the value.
Make your response as short as possible.
Format the Anger value as a boolean.

Review text: <${review}>
`

export const Infertopics = `
Determine five topics that are being discussed in the \
following text, which is delimited by <>.

Make each item one or two words long. 

Format your response as a list of items separated by commas.

Text sample: <${story}>
`

export const certaintopics = `
Determine five topics that are being discussed in the \
following text, which is delimited by <>.

Make each item one or two words long. 

Format your response as a list of items separated by commas.

Text sample: <${story}>
`