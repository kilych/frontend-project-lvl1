import { getRandomInt } from '../math.js';

const defaultSize = 10;

const description = 'What number is missing in the progression?';

const makeProgression = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const progression = [];

  for (let elem = start; elem < (start + step * defaultSize); elem += step) {
    progression.push(elem);
  }

  return progression;
};

const makeQuestionAndAnswer = () => {
  const hiddenElemIndex = getRandomInt(1, defaultSize - 2);
  const progression = makeProgression();
  const [hiddenElem] = progression.splice(hiddenElemIndex, 1, '...');
  const questionAsString = progression.join(' ');
  const answerAsString = hiddenElem.toString();

  return [questionAsString, answerAsString];
};

export {
  description,
  makeQuestionAndAnswer,
};
