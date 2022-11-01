

import anagram from "./anagram";

test("kinship is an anagram of pinkish", () => {
  expect(anagram("kinship", "pinkish")).toBeTruthy();
});

test("kinship is not an anagram of minkish", () => {
  expect(anagram("kinship", "minkish")).toBeFalsy();
});
