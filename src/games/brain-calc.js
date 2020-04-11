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

const stringifyQuestion = ([symbol, operand1, operand2]) => `${operand1} ${symbol} ${operand2}`;

const makeAnswer = ([symbol, ...operands]) => operators[symbol](...operands).toString();

export {
  questionWording,
  makeQuestion,
  makeAnswer,
  stringifyQuestion,
};
