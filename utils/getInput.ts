import * as fs from "fs";
import * as path from "path";

export const getInput = (dir, encoding) =>
  fs.readFileSync(path.resolve(dir, "input.txt"), "binary").toString();

export const getTextFile = (dir, filename) =>
  fs.readFileSync(path.resolve(dir, filename)).toString();
