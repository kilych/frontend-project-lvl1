const maxNum = 100;

const questionWording = 'What is the result of the expression?.';

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min)) + min);

const gcd = (a, b) => {
  const rem = a % b;
  if (rem === 0) return b;

  return gcd(b, rem);
};

const makeQuestion = () => [
  getRandomInt(1, maxNum),
  getRandomInt(1, maxNum),
];

const stringifyQuestion = (question) => `${question[0]} ${question[1]}`;

const makeAnswer = (nums) => `${gcd(...nums)}`;

export {
  questionWording,
  makeQuestion,
  stringifyQuestion,
  makeAnswer,
};
