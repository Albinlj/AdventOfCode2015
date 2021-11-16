import { getInput } from "../utils/getInput";
import { doIt, doStuff } from "./day10";

const input = getInput(__dirname);

test("examples 1", () => {
  expect(doStuff("1")).toEqual("11");
  expect(doStuff("11")).toEqual("21");
  expect(doStuff("21")).toEqual("1211");
  expect(doStuff("1211")).toEqual("111221");
  expect(doStuff("111221")).toEqual("312211");
  expect(doIt("1", 5)).toEqual("312211");
});

test("test 1", () => {
  expect(doIt(input, 40)).toEqual("312211");
});
