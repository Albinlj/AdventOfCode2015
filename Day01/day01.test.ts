import { getInput } from "./../utils/getInput";
import { findBasementIndex } from "./day01";
const input = getInput(__dirname).toString();

test("part2", () => {
  expect(findBasementIndex(input)).toBe(1795);
});
