export default function anagram(source, target) {
  if (source === "" || target === "") return false;
  return (
    source.toString().split("").sort().join("") ===
    target.toString().split("").sort().join("")
  );
}
