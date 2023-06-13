import {expect, test} from 'vitest';
import {getCompletion} from '../src/utill';
import {Translation,Translation2,Translation3,Translation4,user_messages,Transformation,FormatConversion,check,text,review,text2,user_q1,user_q2} from '../src/transforming/prompt';

test('Translation', async () => {
    const re = await getCompletion(Translation);
    console.log(re);
    expect(re).not.toBe(null);

    const re2 = await getCompletion(Translation2);
    console.log(re2);
    expect(re2).not.toBe(null);

    const re3 = await getCompletion(Translation3);
    console.log(re3);
    expect(re3).not.toBe(null);

    const re4 = await getCompletion(Translation4);
    console.log(re4);
    expect(re4).not.toBe(null);
});

for (let i = 0; i < 5; i++) {
    test('Translator', async () => {
        const re = await getCompletion(user_q1 + user_messages[i]);
        console.log(re);
        expect(re).not.toBe(null);

        const re2 = await getCompletion(user_q2 + user_messages[i]);
        console.log(re2);
        expect(re2).not.toBe(null);
    });
}

test('Transformation', async () => {
    const re = await getCompletion(Transformation);
    console.log(re);
    expect(re).not.toBe(null);
})

test('FormatConversion', async () => {
    const re = await getCompletion(FormatConversion);
    console.log(re);
    expect(re).not.toBe(null);
})

for (let i = 0; i < 7; i++) {
    test('check', async () => {
        const re = await getCompletion(check + text[i]);
        console.log(re);
        expect(re).not.toBe(null);
    });
}

test('review', async () => {
    const re = await getCompletion(review + text2);
    console.log(re);
    expect(re).not.toBe(null);
})

