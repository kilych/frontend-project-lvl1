import readlineSync from 'readline-sync';

const maxNumOfRounds = 3;

const greet = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const loop = (
  playerName,
  questionWording,
  makeQA,
) => {
  console.log(questionWording);

  let i = 1;
  while (i <= maxNumOfRounds) {
    const [question, correctAnswer] = makeQA();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);

      return;
    }

    console.log('Correct!');

    i += 1;
  }

  console.log(`Congratulations, ${playerName}!`);
};

export {
  greet,
  loop,
};
