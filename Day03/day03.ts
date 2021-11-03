import { match } from "ts-pattern";

type Coord = [number, number];
export type Direction = "v" | "^" | "<" | ">";

export const getCoordinates = (instruction: Direction[]) =>
  instruction.reduce(
    (acc, _, i) => {
      return [...acc, getNextCoord(acc[i], instruction[i])];
    },
    [[0, 0]] as Coord[]
  );

export const getUniqueCoords = (instruction: Direction[]) => {
  return getCoordinates(instruction)
    .map((a) => a.toString())
    .filter((a, i, arr) => arr.indexOf(a) === i).length;
};

export const getUniqueRoboCoords = (instruction: Direction[]) => {
  return [
    ...getCoordinates(instruction.filter((_, i) => i % 2 === 0)),
    ...getCoordinates(instruction.filter((_, i) => i % 2 === 1)),
  ]
    .map((a) => a.toString())
    .filter((a, i, arr) => arr.indexOf(a) === i).length;
};

const getNextCoord = (coord: Coord, direction: Direction): Coord => {
  return match(direction)
    .with("v", () => [coord[0], coord[1] - 1])
    .with("^", () => [coord[0], coord[1] + 1])
    .with("<", () => [coord[0] - 1, coord[1]])
    .with(">", () => [coord[0] + 1, coord[1]])
    .exhaustive() as Coord;
};
