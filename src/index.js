import readlineSync from 'readline-sync';

const maxNumOfRounds = 3;

const run = ({ questionWording, makeQA }) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(questionWording);

  for (let i = 1; i <= maxNumOfRounds; i += 1) {
    const [question, correctAnswer] = makeQA();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default run;
