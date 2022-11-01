//const filereader = require("./filereader");
import readFile from "./filereader";

test("file contains 338883 items", async () => {
  let items = await readFile("./wordlist.txt");
  expect(items.length).toBe(338883);
});
