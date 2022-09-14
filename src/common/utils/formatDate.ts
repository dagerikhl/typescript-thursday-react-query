export const formatDate = (value: Date | number): string => {
  let date: Date;
  if (typeof value === "number") {
    date = new Date(value);
  } else {
    date = value;
  }

  return date.toISOString().substring(0, 16).replace("T", " ");
};
