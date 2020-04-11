import { getRandomInt, gcd } from '../math.js';

const maxNum = 100;

const questionWording = 'Find the greatest common divisor of given numbers.';

const makeQuestion = () => [
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyQuestion = ([num1, num2]) => `${num1} ${num2}`;

const makeAnswer = (nums) => gcd(...nums).toString();

const makeQA = () => {
  const question = makeQuestion();
  const questionString = stringifyQuestion(question);
  const answer = makeAnswer(question);

  return [questionString, answer];
};

export {
  questionWording,
  makeQA,
};
