import { test, expect,beforeAll } from 'vitest';
import { OpenAIApi } from 'openai';
import { getCompletion } from '../src/utill';
import * as dotenv from 'dotenv';

test('base OpenAIApi', async () => { 
    const re = await getCompletion('Hello, my name is');
    expect(re).not.toBe(null);
})


