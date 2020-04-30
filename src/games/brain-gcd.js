import { getRandomInt, greatestCommonDivisor } from '../math.js';

const maxNum = 100;

const description = 'Find the greatest common divisor of given numbers.';

const makeQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, maxNum);
  const num2 = getRandomInt(1, maxNum);
  const question = `${num1} ${num2}`;
  const answer = greatestCommonDivisor(num1, num2).toString();

  return [question, answer];
};

export {
  description,
  makeQuestionAndAnswer,
};
