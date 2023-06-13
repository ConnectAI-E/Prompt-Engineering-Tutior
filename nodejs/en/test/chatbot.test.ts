import {expect, test} from 'vitest';
import {getCompletionFromMessages} from '../src/utill';
import {messages,messages2,messages3,messages4,text} from '../src/chatbot/prompt';

test('chatbot1', async () => {
    const re = await getCompletionFromMessages(messages, 'gpt-3.5-turbo', 1);
    console.log(re);
    expect(re).not.toBe(null);
})

test('chatbot2', async () => {
    const re = await getCompletionFromMessages(messages2, 'gpt-3.5-turbo', 1);
    console.log(re);
    expect(re).not.toBe(null);
})

test('chatbot3', async () => {
    const re = await getCompletionFromMessages(messages3, 'gpt-3.5-turbo', 1);
    console.log(re);
    expect(re).not.toBe(null);
})

test('chatbot4', async () => {
    const re = await getCompletionFromMessages(messages4, 'gpt-3.5-turbo', 1);
    console.log(re);
    expect(re).not.toBe(null);
})

// test('orderbot', async () => {
//     const re = await getCompletionFromMessages(text, 'undefined', 1);
//     console.log(re);
//     expect(re).not.toBe(null);
// })
