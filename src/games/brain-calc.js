import getRandomInt from '../helpers/get-random-int.js';

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

const makeExpression = () => [
  getRandomOperationSign(),
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyExpression = ([operationSign, ...operands]) => operands.join(` ${operationSign} `);

const evalExpression = ([sign, operand1, operand2]) => signToOperationMap[sign](operand1, operand2);

const makeQuestionAndAnswer = () => {
  const expr = makeExpression();
  const question = stringifyExpression(expr);
  const answer = evalExpression(expr).toString();

  return [question, answer];
};

export {
  description,
  makeQuestionAndAnswer,
};
