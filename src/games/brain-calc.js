import { getRandomInt } from '../helper.js';

const maxNum = 20;

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const questionWording = 'What is the result of the expression?';

const getRandomOperatorSymbol = () => {
  const operatorSymbols = [...Object.keys(operators)];
  const random = getRandomInt(0, operatorSymbols.length - 1);

  return operatorSymbols[random];
};

const makeQuestion = () => [
  getRandomOperatorSymbol(),
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyQuestion = (question) => `${question[1]} ${question[0]} ${question[2]}`;

const makeAnswer = (expr) => `${operatorMapping[expr[0]](expr[1], expr[2])}`;

export {
  questionWording,
  makeQuestion,
  makeAnswer,
  stringifyQuestion,
};
