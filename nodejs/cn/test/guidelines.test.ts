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

test('base OpenAI api', async () => {
    const re = await getCompletion('Hello, my name is');
    console.log(re);
    expect(re).not.toBe(null);
});

test('summary', async () => {
    const re = await summary();
    console.log(re);
    expect(re).not.toBe(null);
});


test('pretty json', async () => {
    const re = await prettyJson();
    console.log(re);
    expect(re).not.toBe(null);
});

test('gen step', async () => {
    const re = await genSteps();
    console.log(re);
    expect(re).not.toBe(null);
});

test('few shot',async ()=>{
    const re = await fewShot()
    console.log(re);
    expect(re).not.toBe(null);
})


test('specify steps',async ()=>{
    const re = await specifySteps()
    console.log(re);
    expect(re).not.toBe(null);
})


test('math solution',async ()=>{
    const re = await mathSolution()
    console.log(re);
    expect(re).not.toBe(null);
})


