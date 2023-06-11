import {getCompletion} from '../utill';

const textWithInstructions = `
Making a cup of tea is easy! First, you need to get some
water boiling. While that's happening,
grab a cup and put a tea bag in it. Once the water is
hot enough, just pour it over the tea bag.
Let it sit for a bit so the tea can steep. After a
few minutes, take out the tea bag. If you
like, you can add some sugar or milk to taste.
And that's it! You've got yourself a delicious
cup of tea to enjoy.`

const checkConditionsPrompt = `
You will be provided with text delimited by triple quotes. 
If it contains a sequence of instructions,
re-write those instructions in the following format:

Step 1 - ...
Step 2 - …
…
Step N - …

If the text does not contain a sequence of instructions,
then simply write \"No steps provided.\"

\"\"\"${textWithInstructions}\"\"\"`


export const genSteps = () => {
    return getCompletion(checkConditionsPrompt);
}
