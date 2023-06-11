import {getCompletion} from '../utill';

const text = `
In a charming village, siblings Jack and Jill set out on
a quest to fetch water from a hilltop
well. As they climbed, singing joyfully, misfortune
struck—Jack tripped on a stone and tumbled
down the hill, with Jill following suit.
Though slightly battered, the pair returned home to
comforting embraces. Despite the mishap,
their adventurous spirits remained undimmed, and they
continued exploring with delight.
`

const instructionPrompt = `
Perform the following actions: 
1 - Summarize the following text delimited by <> with 1 sentence.
2 - Translate the summary into French.
3 - List each name in the French summary.
4 - Output a json object that contains the following
keys: french_summary, num_names.

Use the following format:
Text: <text to summarize>
Summary: <summary>
Translation: <summary translation>
Names: <list of names in Italian summary>
Output JSON: <json with summary and num_names>

Text: <${text}>
`
export const specifySteps = () => {
    return getCompletion(instructionPrompt)
}
