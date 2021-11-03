const md5 = require("md5");

export const dostuff = (input: string) => {
  let i = 1;
  while (true) {
    if ((md5(input + i.toString()) as string).indexOf("00000") === 0) return i;
    i++;
  }
};

export const dostuff2 = (input: string) => {
  let i = 1;
  while (true) {
    if ((md5(input + i.toString()) as string).indexOf("000000") === 0) return i;
    i++;
  }
};
