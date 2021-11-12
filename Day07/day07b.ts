import {
  bgGreen,
  bgRed,
  bgRedBright,
  black,
  blue,
  cyanBright,
  greenBright,
  magenta,
  red,
} from "chalk";
import chalk = require("chalk");
import { memoize } from "fp-ts-std/Function";
import { match, not, select, __ } from "ts-pattern";
import { getInput } from "../utils/getInput";

export const regex1 = /(.*) -> (\w+)/;

export const doIt = (input: string[], key: string = "a") => {
  const map = new Map(
    input.map((str) => {
      const match = regex1.exec(str);
      return [match[2], match[1]];
    })
  );

  return stuff(map, key);
};

type Ret = [Map<string, string>, number];

const stuff = (map: Map<string, string>, key: string): number => {
  const val = map.get(key);

  const kaos = parseInt(key);
  if (!isNaN(kaos)) {
    return kaos;
  }

  const num = parseInt(val);
  if (!isNaN(num)) {
    return num;
  }

  // console.log(chalk.italic(key));
  // console.log(map.get(key));

  const m = val.match(
    /((?<a>\w+) (?<action>AND|OR|RSHIFT|LSHIFT) (?<b>\w+))|((?<not>NOT)? ?(?<value>\w+))/
  );

  // console.log(m);

  return match<
    {
      action: Action;
      value: string;
      not: string;
      a: string;
      b: string;
    },
    number
  >(m.groups as any)
    .with({ action: __.string }, ({ a, b, action }) => {
      const valA = stuff(map, a);
      const valB = stuff(map, b);

      const val = match(action)
        .with("AND", () => valA & valB)
        .with("OR", () => valA | valB)
        .with("RSHIFT", () => valA >> valB)
        .with("LSHIFT", () => valA << valB)
        .exhaustive();

      return val;
    })
    .with(__, ({ value, not }) => {
      const valA = stuff(map, value);
      return not === "NOT" ? ~valA & 0xffff : valA;
    })
    .exhaustive();
};

type Action = "AND" | "OR" | "RSHIFT" | "LSHIFT";

// const input = getInput(__dirname).split("\r\n");
// doIt(input, "a");

const setImmutably = (map: Map<string, string>, key: string, val: string) => {
  const newMap = new Map(map);
  newMap.set(key, val);
  return newMap;
};

const checkRange = (i) => {
  var n = 65536;
  return ((i % n) + n) % n;
};
