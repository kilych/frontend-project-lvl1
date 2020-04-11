import { getRandomInt } from '../helper.js';

const defaultSize = 10;

const questionWording = 'What number is missing in the progression?';

const makeQuestion = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const hiddenElemIndex = getRandomInt(1, defaultSize - 2);

  return [
    start,
    step,
    hiddenElemIndex,
  ];
};

const stringifyQuestion = ([start, step, hiddenElemIndex]) => {
  const elems = [];
  for (let i = 0; i < defaultSize; i += 1) {
    const elem = (i === hiddenElemIndex) ? '..' : (start + (i * step)).toString();
    elems.push(elem);
  }

  return elems.join(' ');
};

const makeAnswer = ([start, step, hiddenElemIndex]) => (start + (step * hiddenElemIndex))
  .toString();

export {
  questionWording,
  makeQuestion,
  makeAnswer,
  stringifyQuestion,
};
