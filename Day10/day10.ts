import { findIndex } from "fp-ts/lib/Array";
export const doIt = (str: string, times: number) => {
  return times > 0 ? doIt(doStuff(str), times - 1) : str;
};

export const doStuff = (str: string) => {
  const index = Array.from(str).findIndex((c, i, arr) => c !== arr[0]);
Array.from(str).reduce((acc, ch, i, arr)=> ch !== acc.[0] , )

  return index === -1
    ? "" + str.length + str[0]
    : "" + index + str[0] + doStuff(str.slice(index));
};
