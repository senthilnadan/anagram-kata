import fs from "fs/promises";
import anagramFinder from "./anagramFinder.js";

//const file = await open("./wordlist.txt", "r");

const fileContents = await fs.readFile("./wordlist.txt", { encoding: "utf-8" });

let items = fileContents.split("\r\n");

console.log(items.length);
console.log(fileContents.length);

//let anagrams = anagramFinder.anagramFinder("kinship", ["kinship","kship","iknship"])

let anagrams = anagramFinder.anagramFinder("kinship", items)
console.log(anagrams);