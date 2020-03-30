const maxNum = 100;

const questionWording = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min)) + min);

const makeQuestion = () => getRandomInt(1, maxNum);

const stringifyQuestion = (question) => `${question}`;

const isEven = (num) => num % 2 === 0;

const makeAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export {
  questionWording,
  makeQuestion,
  stringifyQuestion,
  makeAnswer,
};
