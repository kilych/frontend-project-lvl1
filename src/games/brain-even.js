import { getRandomInt } from '../helper.js';

const maxNum = 100;

const questionWording = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = () => getRandomInt(1, maxNum);

const stringifyQuestion = (question) => `${question}`;

const isEven = (num) => num % 2 === 0;

const makeAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export {
  questionWording,
  makeQuestion,
  makeAnswer,
  stringifyQuestion,
};
