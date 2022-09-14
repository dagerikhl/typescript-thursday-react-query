export const getRandomNumberInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const roll = (treshold: number): boolean => Math.random() < treshold;
