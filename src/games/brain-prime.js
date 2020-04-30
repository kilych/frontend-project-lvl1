import getRandomInt from '../helpers/get-random-int.js';

const maxNum = 100;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;

  for (let divisor = 3; divisor ** 2 <= num; divisor += 2) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const makeQuestionAndAnswer = () => {
  const num = getRandomInt(1, maxNum);
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export {
  description,
  makeQuestionAndAnswer,
};
