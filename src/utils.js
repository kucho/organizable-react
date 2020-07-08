export const apiUrl = "http://api-organizable.herokuapp.com";

export const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const objectToSnake = (obj) => {
  const newObject = {};
  for (let key in obj) {
    newObject[toSnakeCase(key)] = obj[key];
  }
  return newObject;
};
