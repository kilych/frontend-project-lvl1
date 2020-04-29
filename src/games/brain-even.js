import { getRandomInt, isEven } from '../math.js';

const maxNum = 100;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestionAndAnswer = () => {
  const num = getRandomInt(1, maxNum);
  const questionAsString = num.toString();
  const answerAsString = isEven(num) ? 'yes' : 'no';

  return [questionAsString, answerAsString];
};

export {
  description,
  makeQuestionAndAnswer,
};
