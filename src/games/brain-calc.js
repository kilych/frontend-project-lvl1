import { getRandomInt, makeQaGenerator } from '../helper.js';

const maxNum = 20;

const operatorMapping = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const questionWording = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = getRandomInt(0, 2);

  return operators[random];
};

const makeQuestion = () => [
  getRandomOperator(),
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyQuestion = (question) => `${question[1]} ${question[0]} ${question[2]}`;

const makeAnswer = (expr) => `${operatorMapping[expr[0]](expr[1], expr[2])}`;

const makeQA = makeQaGenerator(makeQuestion, stringifyQuestion, makeAnswer);

export {
  questionWording,
  makeQA,
};