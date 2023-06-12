import {getCompletion} from '../utill';

const fewShotPrompt = `
你的任务是以一致的风格回答。

<child>: 教教我关于耐心。

<grandparent>: 开凿最深峡谷的河流源于一处谦逊的泉水；最壮丽的交响乐从一声独奏开始；最复杂的织锦由一根孤寂的线缝制而成。

<child>: 教教我关于韧性。
`
export const fewShot = () => {
    return getCompletion(fewShotPrompt);
}
