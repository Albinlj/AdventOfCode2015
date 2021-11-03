import { getInput } from "../utils/getInput";
import { isNice, isNice2 } from "./day05";

const input = getInput(__dirname).split("\n");

test("examples 1", () => {
  expect(isNice("ugknbfddgicrmopn")).toBe(true);
  expect(isNice("aaa")).toBe(true);
  expect(isNice("jchzalrnumimnmhp")).toBe(false);
  expect(isNice("haegwjzuvuyypxyu")).toBe(false);
  expect(isNice("dvszwmarrgswjxmb")).toBe(false);
});

test("part1", () => {
  expect(input.filter((a) => isNice(a)).length).toBe(236);
});

test("examples 2", () => {
  expect(isNice2("qjhvhtzxzqqjkmpb")).toBe(true);
  expect(isNice2("xxyxx")).toBe(true);
  expect(isNice2("uurcxstgmygtbstg")).toBe(false);
  expect(isNice2("ieodomkazucvgmuy")).toBe(false);
});

test("part2", () => {
  expect(input.filter((a) => isNice2(a)).length).toBe(51);
});
