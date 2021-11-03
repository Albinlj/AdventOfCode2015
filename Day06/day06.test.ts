import { getInput } from "../utils/getInput";
import { runInstruction } from "./day06";

const input = getInput(__dirname).split("\n");

test("examples 1", () => {
  expect(runInstruction("turn on 0,0 through 999,999")).toBe(true);
  expect(runInstruction("toggle 0,0 through 999,0")).toBe(true);
  expect(runInstruction("turn off 499,499 through 500,500")).toBe(false);
});

test("part1", () => {
  expect(input.filter((a) => runInstruction(a)).length).toBe(236);
});

