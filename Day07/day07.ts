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

const stuff = (map: Map<string, string>, key: string): Ret => {
  const val = map.get(key);

  const kaos = parseInt(key);
  if (!isNaN(kaos)) {
    return [map, kaos];
  }

  const num = parseInt(val);
  if (!isNaN(num)) {
    return [map, num];
  }

  // console.log(chalk.italic(key));
  // console.log(map.get(key));

  console.log(bgRed(key));
  console.log(red(val));
  try {
    const m = val.match(
      /((?<a>\w+) (?<action>AND|OR|RSHIFT|LSHIFT) (?<b>\w+))|((?<not>NOT)? ?(?<value>\w+))/
    );

    // console.log(m);

    const hej = match<
      {
        action: Action;
        value: string;
        not: string;
        a: string;
        b: string;
      },
      Ret
    >(m.groups as any)
      .with({ action: __.string }, ({ a, b, action }) => {
        console.log(chalk.yellow(action));

        const [mapA, valA] = stuff(map, a);
        const [mapB, valB] = stuff(setImmutably(mapA, a, valA.toString()), b);

        const val = match(action)
          .with("AND", () => valA & valB)
          .with("OR", () => valA | valB)
          .with("RSHIFT", () => valA >> valB)
          .with("LSHIFT", () => valA << valB)
          .exhaustive();

        return [setImmutably(mapB, key, val.toString()), val];
      })
      .with(__, ({ value, not }) => {
        const [mapA, valA] = stuff(map, value);
        console.log(
          magenta(JSON.stringify(Array.from(mapA.entries()), null, 2))
        );
        console.log(magenta(valA));
        return [
          setImmutably(mapA, value, valA.toString()),
          not === "NOT" ? 65535 - valA : valA,
        ];
      })
      .exhaustive();
    return hej;
  } catch (e) {
    console.log(key);
    console.log(e);
    // console.log(map);
  }
};

type Action = "AND" | "OR" | "RSHIFT" | "LSHIFT";

// const input = getInput(__dirname).split("\r\n");
// doIt(input, "a");

const setImmutably = (map: Map<string, string>, key: string, val: string) => {
  const newMap = new Map(map);
  newMap.set(key, val);
  return newMap;
};
