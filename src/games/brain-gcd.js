import { getRandomInt, makeQaGenerator } from '../helper.js';

const maxNum = 100;

const questionWording = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const rem = a % b;
  if (rem === 0) return b;

  return gcd(b, rem);
};

const makeQuestion = () => [
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyQuestion = (question) => `${question[0]} ${question[1]}`;

const makeAnswer = (nums) => `${gcd(...nums)}`;

const makeQA = makeQaGenerator(makeQuestion, stringifyQuestion, makeAnswer);

export {
  questionWording,
  makeQA,
};
