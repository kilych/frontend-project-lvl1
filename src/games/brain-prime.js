import { getRandomInt, isPrime } from '../math.js';

const maxNum = 100;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestionAndAnswer = () => {
  const num = getRandomInt(1, maxNum);
  const questionAsString = num.toString();
  const answerAsString = isPrime(num) ? 'yes' : 'no';

  return [questionAsString, answerAsString];
};

export {
  description,
  makeQuestionAndAnswer,
};
