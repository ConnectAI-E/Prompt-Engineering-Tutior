

import * as fs from 'fs';

const review = fs.readFileSync('src/inferring/review.txt', 'utf8');
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
