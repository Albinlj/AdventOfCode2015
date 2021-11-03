export const regex1 = new RegExp(/[aeiou]/gi);
export const regex2 = new RegExp(/(.)\1+/gi);
export const regex3 = new RegExp(/(ab|cd|pq|xy)/);

export const isNice = (input: string) => {
  return (
    input.match(regex1)?.length >= 3 &&
    input.match(regex2) !== null &&
    input.match(regex3) === null
  );
};

export const regexA = new RegExp(/(..).*\1/gi);
export const regexB = new RegExp(/(.).\1/gi);

export const isNice2 = (input: string) => {
  return input.match(regexA) !== null && input.match(regexB) !== null;
};
