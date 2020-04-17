const getRandomInt = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);

  return Math.floor(ceiledMin + (Math.random() * (flooredMax - ceiledMin + 1)));
};

const isEven = (num) => num % 2 === 0;

const greatestCommonDivisor = (a, b) => {
  if (a === 0 && b === 0) return NaN;
  if (b === 0) return a;

  const rem = a % b;

  return (rem === 0) ? b : greatestCommonDivisor(b, rem);
};

const isPrimeIter = (num, divisor) => {
  if (divisor ** 2 > num) return true;
  if (num % divisor === 0) return false;

  return isPrimeIter(num, divisor + 2);
};

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;

  return isPrimeIter(num, 3);
};

export {
  getRandomInt,
  isEven,
  greatestCommonDivisor,
  isPrime,
};
