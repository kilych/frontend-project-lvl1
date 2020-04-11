import { getRandomInt, isEven } from '../math.js';

const maxNum = 100;

const questionWording = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = () => getRandomInt(1, maxNum);

const stringifyQuestion = (question) => question.toString();

const makeAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const makeQA = () => {
  const question = makeQuestion();
  const questionString = stringifyQuestion(question);
  const answer = makeAnswer(question);

  return [questionString, answer];
};

export {
  questionWording,
  makeQA,
};
