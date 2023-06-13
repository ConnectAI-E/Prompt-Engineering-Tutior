import {expect, test} from 'vitest';
import {getCompletion} from '../src/utill';
import {sentimentPrompt, sentimentPrompt2, Identifytypes, Identifyanger, Extract, multipletasks, Infertopics, certaintopics} from '../src/inferring/prompt';


// Sentiment
test('sentiment', async () => {
    const re = await getCompletion(sentimentPrompt);
    console.log(re);
    expect(re).not.toBe(null);

    const re2 = await getCompletion(sentimentPrompt2);
    console.log(re2);
    expect(re2).not.toBe(null);
})

test('Identifytypes', async () => {
    const re = await getCompletion(Identifytypes);
    console.log(re);
    expect(re).not.toBe(null);
})

test('Identifyanger', async () => {
    const re = await getCompletion(Identifyanger);
    console.log(re);
    expect(re).not.toBe(null);
})

test('Extract', async () => {
    const re = await getCompletion(Extract);
    console.log(re);
    expect(re).not.toBe(null);
})

test('multipletasks', async () => {
    const re = await getCompletion(multipletasks);
    console.log(re);
    expect(re).not.toBe(null);
})

test('Infertopics', async () => {
    const re = await getCompletion(Infertopics);
    console.log(re);
    expect(re).not.toBe(null);
})

test('certaintopics', async () => {
    const re = await getCompletion(certaintopics);
    console.log(re);
    expect(re).not.toBe(null);
})