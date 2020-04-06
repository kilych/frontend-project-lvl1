const getRandomInt = (min, max) => Math.round((Math.random() * (max - min)) + min);

const makeQA = (game) => {
  const question = game.makeQuestion();
  const questionString = game.stringifyQuestion(question);
  const answer = game.makeAnswer(question);

  return [questionString, answer];
};

export {
  getRandomInt,
  makeQA,
};
