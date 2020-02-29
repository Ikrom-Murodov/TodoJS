export const rand = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

export const id = (length = 10) => {
  let id = "";
  for (let i = 0; i < length; i++) {
    id += String.fromCharCode(rand(97, 122));
  }

  return id;
};
