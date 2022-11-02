import fs from "fs/promises";
import anagramFinder from "./anagramFinder.js";
import arraySplit from "./arraySplit.js";

//const file = await open("./wordlist.txt", "r");

const fileContents = await fs.readFile("./wordlist.txt", { encoding: "utf-8" });

let items = fileContents.split("\r\n");

console.log(items.length);
console.log(fileContents.length);

//let anagrams = anagramFinder.anagramFinder("kinship", ["kinship","kship","iknship"])

//let anagrams = anagramFinder.anagramFinder("kinship", items)
//console.log(anagrams);
const bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(arraySplit(bigArray, 2));
