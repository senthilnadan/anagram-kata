const anagram = require("./anagram");

test("kinship is an anagram of pinkish", () => {
    expect(anagram("kinship", "pinkish" )).toBeTruthy()
})