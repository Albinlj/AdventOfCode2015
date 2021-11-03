import { dostuff, dostuff2 } from "./day04";

const input = "bgvyzdsv";

test("example1", () => {
  expect(dostuff("abcdef")).toBe(609043);
});

test("part1", () => {
  expect(dostuff(input)).toBe(254575);
});

test("part2", () => {
  expect(dostuff2(input)).toBe(1038736);
});
