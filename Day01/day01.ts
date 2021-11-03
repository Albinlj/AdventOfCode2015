import { match, __ } from "ts-pattern";

export const findBasementIndex = (
  input: string,
  currentFloor = 0,
  currentIndex = 0
) => {
  if (currentFloor === -1) return currentIndex;
  return findBasementIndex(
    input,
    currentFloor + (input[currentIndex] === "(" ? 1 : -1),
    currentIndex + 1
  );
};
