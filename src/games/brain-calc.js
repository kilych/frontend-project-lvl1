import { getRandomInt } from '../math.js';

const maxNum = 20;

const signToOperationMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const description = 'What is the result of the expression?';

const getRandomOperationSign = () => {
  const operationSigns = Object.keys(signToOperationMap);
  const random = getRandomInt(0, operationSigns.length - 1);

  return operationSigns[random];
};

const makeQuestion = () => [
  getRandomOperationSign(),
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyQuestion = ([operationSign, operand1, operand2]) => `${operand1} ${operationSign} ${operand2}`;

const makeAnswer = ([sign, ...operands]) => signToOperationMap[sign](...operands).toString();

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
