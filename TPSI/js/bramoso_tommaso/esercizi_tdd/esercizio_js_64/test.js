import { count_vocals } from "./bramoso_esercizio_js_64.js";
import fs, { read } from "fs";

const wordlist_path = process.cwd().includes("esercizio_js_64")
  ? "../esercizio_js_61/"
  : "./esercizio_js_61/";

const base_path = process.cwd().includes("esercizio_js_64")
  ? "./"
  : "esercizio_js_64/";

describe("ESERCIZIO 64", () => {
  test("TEST 01", () => {
    expect(count_vocals("supercalifragilistichespiralidoso")).toStrictEqual(
      new Map([
        ["a", 3],
        ["e", 2],
        ["i", 6],
        ["o", 2],
        ["u", 1],
      ])
    );
  });
  test("TEST 02", () => {
    expect(count_vocals("Richard Stallman")).toStrictEqual(new Map([['i', 1], ['a', 3]]));
  });
});