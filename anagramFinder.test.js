import anagram from "./anagramFinder";

import readFile from "./filereader";

let globalItems = [];
beforeAll(async () => {
  globalItems = await readFile("./wordlist.txt");
});

test("kinship is an anagram of pinkish", () => {
  expect(anagram.anagramFinder("kinship", ["pinkish", "workish"])).toEqual(
    expect.arrayContaining(["pinkish"])
  );
});

test("kinship is an anagram of pinkish", () => {
  expect(anagram.anagramFinder("kinship", globalItems)).toEqual(
    expect.arrayContaining(["pinkish", "kinship"])
  );
});

test("paste is an anagram of pinkish", () => {
  expect(anagram.anagramFinder("paste", globalItems)).toEqual(
    expect.arrayContaining([
      "paste",
      "pates",
      "peats",
      "septa",
      "spate",
      "tapes",
      "tepa1",
    ])
  );
});

test("kinship is an anagramGlobalFind of pinkish", async () => {
  expect(await anagram.anagramFinder("kinship", globalItems)).toEqual(
    expect.arrayContaining(["pinkish", "kinship"])
  );
});
