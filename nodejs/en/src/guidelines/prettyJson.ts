import {getCompletion} from '../utill';

const structuredOutputPrompt = `
Generate a list of three made-up book titles along 
with their authors and genres. 
Provide them in JSON format with the following keys: book_id, title, author, genre.`

export const prettyJson = () => {
    return getCompletion(structuredOutputPrompt);
}
