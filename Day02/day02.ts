type Box = string;

export const calculateNeededPaper = (box: Box): number => {
  const sides = box
    .split("x")
    .map((a) => parseInt(a))
    .sort();
  return (
    3 * sides[0] * sides[1] + 2 * sides[1] * sides[2] + 2 * sides[2] * sides[0]
  );
};

export const calculateSum = (boxes: Box[]) =>
  boxes.map((b) => calculateNeededPaper(b)).reduce((a, b) => a + b);
