import getRandomInt from '../helpers/get-random-int.js';

const maxNum = 100;

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (a === 0 && b === 0) return NaN;
  if (b === 0) return a;

  const rem = a % b;

  return (rem === 0) ? b : greatestCommonDivisor(b, rem);
};

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
