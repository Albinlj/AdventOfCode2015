import { getInput } from "../utils/getInput";
import { doit, parse } from "./day09";

const input = getInput(__dirname).split("\n");

test("examples 1", () => {
  expect(doit(input.map(parse))).toEqual(141);
});

test("parse", () => {
  expect(parse("Lund to Oslo = 1337")).toEqual({
    cities: ["Lund", "Oslo"],
    distance: 1337,
  });
});
