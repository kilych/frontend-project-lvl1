import readlineSync from 'readline-sync';
import greet from '../helper.js';

const correctAnswerMaxCount = 3;
const maxNum = 100;

const getRandomInt = (min, max) => Math.round((Math.random() * (max - min)) + min);

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const loop = () => {
  const name = greet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  while (i <= correctAnswerMaxCount) {
    const num = getRandomInt(1, maxNum);
    const correctAnswer = getCorrectAnswer(num);

    const answer = readlineSync.question(`Question: ${num}`);
    console.log(`Your answer: ${answer}`);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default loop;
