import { getRandomInt } from '../math.js';

const maxNum = 20;

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const description = 'What is the result of the expression?';

const getRandomOperatorSymbol = () => {
  const operatorSymbols = Object.keys(operators);
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

const makeQuestionAndAnswer = () => {
  const question = makeQuestion();
  const questionAsString = stringifyQuestion(question);
  const answerAsString = makeAnswer(question);

  return [questionAsString, answerAsString];
};

export {
  description,
  makeQuestionAndAnswer,
};
