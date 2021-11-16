import { getTextFile } from "./../utils/getInput";
import { getInput } from "../utils/getInput";
import { doIt } from "./day07b";
import { cyan } from "chalk";

const input = getInput(__dirname).split("\r\n");
const example = getTextFile(__dirname, "example.txt").split("\r\n");
const thing = getTextFile(__dirname, "thing.txt").split("\r\n");

test("examples 1", () => {
  expect(doIt(example, "d")).toBe(72);
  expect(doIt(example, "e")).toBe(507);
  expect(doIt(example, "f")).toBe(492);
  expect(doIt(example, "g")).toBe(114);
  expect(doIt(example, "h")).toBe(65412);
  expect(doIt(example, "i")).toBe(65079);
  expect(doIt(example, "x")).toBe(123);
  expect(doIt(example, "y")).toBe(456);
  expect(doIt(example, "cp")).toBe(123);
  expect(doIt(example, "two")).toBe(2);
  expect(doIt(example, "hej")).toBe(492);
});

test("part 1", () => {
  const laser = doIt(input, "a");
  expect(laser).toBe(72);
});

// test("testing 1", () => {
//   expect(doIt(thing, "d")[1]).toEqual(72);
// });
