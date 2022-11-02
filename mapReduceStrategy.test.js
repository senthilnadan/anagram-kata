import arraySplit from "./arraySplit.js";
import mapToDictionary from "./maptoDictionary.js";

const testArray = [
  "anagram",
  "sonagram",
  "nagaram",
  "ganaram",
  "anagmar",
  "senthil",
  "ensthil",
  "esnthil",
  "nesthil",
  "junky",
  "munky",
  "pinky",
  "donkey",
];

test("Splititng test Array results in 5 pieces", () => {
  let expectedResult = [
    ["anagram", "sonagram", "nagaram"],
    ["ganaram", "anagmar", "senthil"],
    ["ensthil", "esnthil", "nesthil"],
    ["junky", "munky", "pinky"],
    ["donkey"],
  ];
  let splitResult = arraySplit([...testArray], 3);
  for (let a = 0; a < splitResult.length; a++)
    expect(splitResult[a]).toEqual(expect.arrayContaining(expectedResult[a]));
});

function key(item) {
  return item.split("").sort().join("");
}

test("get Key of anagram to be apple", () => {
  expect(key("anagram")).toBe("aaagmnr");
});

test("Map items in an array to the dictionary with key asc of dictionary", () => {
  let dictionary = mapToDictionary(testArray);
  expect(dictionary.get("aaagmnr")).toEqual(["anagram"]);
  //expect(dictionary).toEqual({});
});
