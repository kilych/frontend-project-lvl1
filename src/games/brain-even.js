import { getRandomInt, isEven } from '../math.js';

const maxNum = 100;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestionAndAnswer = () => {
  const num = getRandomInt(1, maxNum);
  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export {
  description,
  makeQuestionAndAnswer,
};
