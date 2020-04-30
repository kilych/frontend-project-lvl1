import { getRandomInt } from '../math.js';

const progressionSize = 10;

const maxProgressionStart = 100;

const maxProgressionStep = 10;

const description = 'What number is missing in the progression?';

const makeProgression = () => {
  const start = getRandomInt(1, maxProgressionStart);
  const step = getRandomInt(1, maxProgressionStep);
  const progression = [];

  for (let elem = start; elem < (start + step * progressionSize); elem += step) {
    progression.push(elem);
  }

  return progression;
};

const makeQuestionAndAnswer = () => {
  const progression = makeProgression();
  const hiddenElemIndex = getRandomInt(1, progression.length - 2);
  const [hiddenElem] = progression.splice(hiddenElemIndex, 1, '...');
  const question = progression.join(' ');
  const answer = hiddenElem.toString();

  return [question, answer];
};

export {
  description,
  makeQuestionAndAnswer,
};
