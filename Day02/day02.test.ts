import { calculateNeededPaper, calculateSum } from "./day02";
import { getInput } from "./../utils/getInput";
const input = getInput(__dirname).split("\n");

test("a", () => {
  expect(calculateNeededPaper("2x3x4")).toBe(58);
  expect(calculateNeededPaper("2x4x3")).toBe(58);
  expect(calculateNeededPaper("3x4x2")).toBe(58);
  expect(calculateNeededPaper("3x2x4")).toBe(58);
  expect(calculateNeededPaper("4x3x2")).toBe(58);
  expect(calculateNeededPaper("4x2x3")).toBe(58);
});

test("b", () => {
  expect(calculateNeededPaper("100x100x100")).toBe(70000);
  expect(calculateNeededPaper("29x13x26")).toBe(3276);
});

test("part2", () => {
  expect(calculateSum(input)).toBe(1337);
});
