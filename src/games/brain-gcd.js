import { getRandomInt } from '../helper.js';

const maxNum = 100;

const questionWording = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0 && b === 0) return NaN;
  if (b === 0) return gcd(b, a);

  const rem = a % b;

  return (rem === 0) ? b : gcd(b, rem);
};

const makeQuestion = () => [
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyQuestion = ([num1, num2]) => `${num1} ${num2}`;

const makeAnswer = (nums) => gcd(...nums).toString();

export {
  questionWording,
  makeQuestion,
  makeAnswer,
  stringifyQuestion,
};
