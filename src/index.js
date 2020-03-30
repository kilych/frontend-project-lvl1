import readlineSync from 'readline-sync';

const correctAnswerMaxCount = 3;

const greet = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const loop = (
  playerName,
  questionWording,
  makeQuestion,
  stringifyQuestion,
  makeAnswer,
) => {
  console.log(questionWording);

  let i = 1;
  while (i <= correctAnswerMaxCount) {
    const question = makeQuestion();
    const correctAnswer = makeAnswer(question);
    const questionString = stringifyQuestion(question);

    const answer = readlineSync.question(`Question: ${questionString}`);
    console.log(`Your answer: ${answer}`);

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
