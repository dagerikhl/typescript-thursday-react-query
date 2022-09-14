export const delay = (ms: number | [number, number]): Promise<void> => {
  let time: number;
  if (typeof ms === "number") {
    time = ms;
  } else {
    const [min, max] = ms;
    time = Math.random() * (max - min) + min;
  }

  return new Promise((resolve) => setTimeout(resolve, time));
};
