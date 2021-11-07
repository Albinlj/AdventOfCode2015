import { getInput } from "../utils/getInput";
import {
  countTurnedOnLights,
  createGrid,
  Instruction,
  parseInstruction,
  runInstruction,
  runInstructions,
} from "./day06";

const input = getInput(__dirname).split("\n");
const instructions = input.map(parseInstruction);

test("examples 1", () => {
  expect(
    countTurnedOnLights(
      runInstruction(
        createGrid(1000, 1000),
        parseInstruction("turn on 0,0 through 999,0")
      )
    )
  ).toBe(1000);
});

test("part1", () => {
  expect(
    countTurnedOnLights(runInstructions(createGrid(1000, 1000), instructions))
  ).toBe(377891);
});

test("parsing", () => {
  const str = "turn off 0,1 through 2,3";
  const parsed: Instruction = parseInstruction(str);

  expect(parsed).toEqual({ action: "turn off", xA: 0, yA: 1, xB: 2, yB: 3 });
});
