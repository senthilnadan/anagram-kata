import fs from "fs/promises";

export default async function readFile(source) {
  const fileContents = await fs.readFile(source, {
    encoding: "utf-8",
  });

  return fileContents.split("\n");
}
