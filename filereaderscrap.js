import fs from "fs/promises";

const file = await open("./wordlist.txt", "r");

const fileContents = await fs.readFile("./wordlist.txt", { encoding: "utf-8" });

let items = fileContents.split("\n");

console.log(items.length);
console.log(fileContents.length);
