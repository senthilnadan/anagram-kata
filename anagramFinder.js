import anagram from "./anagram";

import readFile from "./filereader";

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
