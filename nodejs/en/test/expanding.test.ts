import {expect, test} from 'vitest';
import {getCompletion} from '../src/utill';
import {reply,remind} from '../src/expanding/prompt';

test('reply', async () => {
    const re = await getCompletion(reply);
    console.log(re);
    expect(re).not.toBe(null);
})

test('remind', async () => {
    const re = await getCompletion(remind);
    console.log(re);
    expect(re).not.toBe(null);
})