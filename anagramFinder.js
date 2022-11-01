import anagram from "./anagram.js";

import readFile from "./filereader.js";

function anagramFinder(source, target) {
  return target.filter((item) => anagram(source, item));
}

async function anagramGlobalFind(source) {
  let globalItems = await readFile("./wordlist.txt");
  return globalItems.filter((item) => anagram(source, globalItems));
}

export default {
  anagramFinder,
  anagramGlobalFind,
};
