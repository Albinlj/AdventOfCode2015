import { getInput } from "../utils/getInput";
import { getUniqueCoords, Direction, getUniqueRoboCoords } from "./day03";
const input = Array.from(getInput(__dirname)) as Direction[];

test("part1", () => {
  expect(getUniqueCoords(input)).toBe(2565);
});

test("part2", () => {
  expect(getUniqueRoboCoords(input)).toBe(2639);
});
