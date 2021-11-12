export const stuff = (str: string) => {
  const reg = /(\\\"|\\x\d+|\\\\)/g;

  const short = str.replace(reg, "-").replace(/\"/g, "");
  console.log(str);
  console.log(short);

  return Math.abs(str.length - short.length);
};
