import {expect, test} from 'vitest';
import {getCompletion} from '../src/utill';
import {sentimentPrompt, sentimentPrompt2} from '../src/inferring/prompt';

test('base OpenAI api', async () => {
    const re = await getCompletion('Hello, my name is');
    console.log(re);
    expect(re).not.toBe(null);
});


// Sentiment
test('sentiment', async () => {
    const re = await getCompletion(sentimentPrompt);
    console.log(re);
    expect(re).not.toBe(null);

    const re2 = await getCompletion(sentimentPrompt2);
    console.log(re2);
    expect(re2).not.toBe(null);
})
