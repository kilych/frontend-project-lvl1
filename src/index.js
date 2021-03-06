import readlineSync from 'readline-sync';

const maxNumOfRounds = 3;

const run = ({ description, makeQuestionAndAnswer }) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  for (let i = 1; i <= maxNumOfRounds; i += 1) {
    const [question, correctAnswer] = makeQuestionAndAnswer();

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
