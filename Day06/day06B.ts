import { number } from "fp-ts";

type Action = "turn on" | "turn off" | "toggle";
type InstructionString =
  `${Action} ${number},${number} through ${number},${number}`;

type Row = number[];

export type Instruction = {
  action: Action;
  xA: number;
  xB: number;
  yA: number;
  yB: number;
};

const regex =
  /(?<action>toggle|turn on|turn off) (?<xA>\d+),(?<yA>\d+) through (?<xB>\d+),(?<yB>\d+)/;

export const parseInstruction = (str: InstructionString): Instruction => {
  const groups = str.match(regex).groups;
  return {
    action: groups["action"] as Action,
    xA: parseInt(groups["xA"]),
    yA: parseInt(groups["yA"]),
    xB: parseInt(groups["xB"]),
    yB: parseInt(groups["yB"]),
  };
};

export const runInstruction = (rows: Row[], input: Instruction) => {
  return [
    ...rows.slice(undefined, input.yA),
    ...rows.slice(input.yA, input.yB + 1).map((row) => [
      ...row.slice(undefined, input.xA),
      ...row.slice(input.xA, input.xB + 1).map((c) => {
        switch (input.action) {
          case "toggle":
            return c + 2;
          case "turn on":
            return c + 1;
          case "turn off":
            return Math.max(c - 1, 0);
        }
      }),
      ...row.slice(input.xB + 1, undefined),
    ]),
    ...rows.slice(input.yB + 1, undefined),
  ];
};

export const runInstructions = (start: Row[], instructions: Instruction[]) =>
  instructions.reduce(runInstruction, start);

export const createGrid = (x: number, y: number) => {
  return new Array(y).fill(new Array(x).fill(false));
};

export const countBrightness = (rows: Row[]) => {
  return rows.reduce((a, b) => a + b.reduce((a, b) => a + b, 0), 0);
};
