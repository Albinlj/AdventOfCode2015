import { number } from "fp-ts";

type Type = "turn on" | "turn off" | "toggle";
type InstructionString =
  `${Type} ${number},${number} through ${number},${number}`;

type Row = boolean[];

type Instruction = {
  type: Type;
  xA: number;
  xB: number;
  yA: number;
  yB: number;
};

export const runInstruction = (rows: Row[], input: Instruction) => {
  return [
    ...rows.slice(undefined, input.yA),
    ...rows.slice(input.yA, input.yB + 1).map((row) => [
      ...row.slice(undefined, input.xA),
      ...row.slice(input.xA, input.xB + 1).map((c) => {
        switch (input.type) {
          case "toggle":
            return !c;
          case "turn on":
            return true;
          case "turn off":
            return false;
        }
      }),
      ...row.slice(input.xB + 1, undefined),
    ]),
    ...rows.slice(input.yB + 1, undefined),
  ];
};

export const runInstructions = () => {};
