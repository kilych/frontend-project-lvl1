const getRandomInt = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);

  return Math.floor(ceiledMin + (Math.random() * (flooredMax - ceiledMin + 1)));
};

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
