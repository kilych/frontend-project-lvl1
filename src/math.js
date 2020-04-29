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

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;

  for (let divisor = 3; divisor ** 2 <= num; divisor += 2) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

export {
  getRandomInt,
  isEven,
  greatestCommonDivisor,
  isPrime,
};
