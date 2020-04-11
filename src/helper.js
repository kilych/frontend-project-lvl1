const getRandomInt = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);

  return Math.floor(ceiledMin + (Math.random() * (flooredMax - ceiledMin + 1)));
};

export {
  getRandomInt,
};
