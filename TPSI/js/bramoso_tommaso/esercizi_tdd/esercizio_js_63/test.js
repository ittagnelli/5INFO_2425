import { unique_characters } from "./bramoso_esercizio_js_63.js";
import fs from 'fs';

const wordlist_path = process.cwd().includes("esercizio_js_63")
  ? "../esercizio_js_61/"
  : "./esercizio_js_61/";

  const base_path = process.cwd().includes("esercizio_js_63")
  ? "./"
  : "esercizio_js_63/";


describe("ESERCIZIO 63", () => {
  test("TEST 01", () => {
    expect(unique_characters("supercalifragilistichespiralidoso")).toBe("supercalifgthdo");
  });
  test("TEST 02", () => {
    expect(unique_characters("Linus Benedict Torvalds")).toBe("Linus BedctTorval");
  });
});