import { getRandomInt, isPrime } from '../math.js';

const maxNum = 100;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestion = () => getRandomInt(1, maxNum);

const makeAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const makeQuestionAndAnswer = () => {
  const question = makeQuestion();
  const questionAsString = question.toString();
  const answerAsString = makeAnswer(question);

  return [questionAsString, answerAsString];
};

export {
  description,
  makeQuestionAndAnswer,
};
