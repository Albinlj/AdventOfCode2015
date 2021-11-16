import { getInput } from "../utils/getInput";
import { stuff } from "./day08";

const input = getInput(__dirname, "utf-8");

test("examples 1", () => {
  expect(stuff(`""`)).toEqual(2);
  expect(stuff(`"abc"`)).toEqual(2);
  expect(stuff(`"aaa\"aaa"`)).toEqual(3);
  expect(stuff(`"\x27"`)).toEqual(5);
});

// test("part1", () => {
//   expect(stuff(input)).toEqual(1337);
// });
