import { getRandomInt, isEven } from '../math.js';

const maxNum = 100;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = () => getRandomInt(1, maxNum);

const makeAnswer = (num) => (isEven(num) ? 'yes' : 'no');

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
