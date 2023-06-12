import {expect, test} from 'vitest';
import {getCompletion} from '../src/utill';
import {
    genPromptShortSummary,
    promptDetail1,
    promptDetail2,
    promptExtract,
    promptLimitLength,
} from '../src/summarizing/prompt';
import * as fs from 'fs';

test('base OpenAI api', async () => {
    const re = await getCompletion('Hello, my name is');
    console.log(re);
    expect(re).not.toBe(null);
});


//  Summarize with a word/sentence/character limit
test('try first', async () => {
    const re = await getCompletion(promptLimitLength);
    console.log(re);
    expect(re).not.toBe(null);
});


test('focus shipping detail', async () => {
    const re = await getCompletion(promptDetail1);
    console.log(re);
    expect(re).not.toBe(null);
});

test('focus price detail', async () => {
    const re = await getCompletion(promptDetail2);
    console.log(re);
    expect(re).not.toBe(null);
});


test('extract instead of summarize', async () => {
    const re = await getCompletion(promptExtract);
    console.log(re);
    expect(re).not.toBe(null);
});

test('summary multiple reviews', async() => {
    const allReviews = fs.readdirSync('src/summarizing/review').map((v) => {
        return fs.readFileSync(`src/summarizing/review/${ v }`).toString();
    });

    for (const review of allReviews) {
        const re = await getCompletion(genPromptShortSummary(review));
        console.log(re);
        expect(re).not.toBe(null);
    }

});
