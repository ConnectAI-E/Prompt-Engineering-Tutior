import {expect, test} from 'vitest';
import {getCompletion} from '../src/utill';
import {
    fewShot,
    genSteps,
    mathSolution,
    prettyJson,
    specifySteps,
    summary,
} from '../src/guidelines';
import {
    promptFocusDetail,
    promptLimitLength,
    promptRaw,
    promptShowHtml,
} from '../src/iterative/prompt';
import {resourceLimits} from 'worker_threads';
import * as fs from 'fs';

test('base OpenAI api', async () => {
    const re = await getCompletion('Hello, my name is');
    console.log(re);
    expect(re).not.toBe(null);
});


test('try first',async ()=>{
    const re = await getCompletion(promptRaw)
    console.log(re);
    expect(re).not.toBe(null);
})


// - Limit the number of words/sentences/characters.
test('try limit length', async () => {
    const re = await getCompletion(promptLimitLength)
    console.log(re);
    expect(re).not.toBe(null);
})


// Ask it to focus on the aspects that are relevant to the intended audience.
test('try focus details', async () => {
    const re = await getCompletion(promptFocusDetail)
    console.log(re);
    expect(re).not.toBe(null);
})


test('try show in html', async () => {
    const re = await getCompletion(promptShowHtml)
    console.log(re);
    expect(re).not.toBe(null);

    if(!fs.existsSync('./out')){
        fs.mkdirSync('./out')
    }
    if(re){
        fs.writeFileSync('./out/iterative.html',re)
    }
})


// Iterative process:
//  - Try something
//  - Analyze where the result does not give you what you want
//  - Clarify the instructions, give more time to think
//  - Refine prompts with a batch of examples (start small and expand cases)

