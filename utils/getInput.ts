import * as fs from "fs";
import * as path from "path";

export const getInput = (dir) =>
  fs.readFileSync(path.resolve(dir, "input.txt")).toString();
