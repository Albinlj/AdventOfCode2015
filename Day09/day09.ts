type Data = { cities: string[]; distance: number };

export const parse = (string: string): Data => {
  const a = string.split(" = ");
  const distance = parseInt(a[1]);
  const cities = a[0].split(" to ");

  return { cities, distance };
};

export const doit = (distances: Data[]) => {
  console.log(distances);
  const cities = distances
    .flatMap((d) => d.cities)
    .filter((d, i, arr) => arr.findIndex((db) => db === d) === i);

  console.log(cities);

  return cities.reduce(
    (min, curr) => Math.max(min, findShortestPath(curr, distances)),
    0
  );
};

export const findShortestPath = (current: string, distances: Data[]) => {
  if (distances.length === 0) return 0;

  return distances
    .filter((d) => d.cities.includes(current))
    .reduce(
      (min, d) =>
        Math.max(
          min,
          d.distance +
            findShortestPath(
              d.cities.find((c) => c !== current),
              distances.filter((d) => !d.cities.includes(current))
            )
        ),
      0
    );
};
