import { getRandomInt } from '../helper.js';

const maxNum = 100;

const questionWording = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestion = () => getRandomInt(1, maxNum);

const stringifyQuestion = (question) => question.toString();

const isPrimeIter = (num, divisor) => {
  if (divisor ** 2 > num) return true;
  if (num % divisor === 0) return false;

  return isPrimeIter(num, divisor + 2);
};

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;

  return isPrimeIter(num, 3);
};

const makeAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

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
