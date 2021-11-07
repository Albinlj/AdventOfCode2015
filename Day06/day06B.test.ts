import { getInput } from "../utils/getInput";
import {
  countBrightness,
  createGrid,
  parseInstruction,
  runInstructions,
} from "./day06B";

const input = getInput(__dirname).split("\n");
const instructions = input.map(parseInstruction);

test("part1", () => {
  expect(
    countBrightness(runInstructions(createGrid(1000, 1000), instructions))
  ).toBe(14110788);
});
