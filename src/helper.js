const getRandomInt = (min, max) => Math.round((Math.random() * (max - min)) + min);

const makeQaGenerator = (makeQ, stringifyQ, makeA) => () => {
  const question = makeQ();
  const stringQuestion = stringifyQ(question);
  const answer = makeA(question);

  return [stringQuestion, answer];
};

export {
  getRandomInt,
  makeQaGenerator,
};
