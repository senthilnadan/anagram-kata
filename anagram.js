export default function anagram(source, target) {
 // console.log(source + " : " + target);
 const JOINCHAR = "";
  if (target.trim().startsWith("pinkish")) {
   /*let test = target.trim().split("").sort();
   let stest = source.split("").sort();
   console.log(source + " : " + target);
   console.log("target" + " : " + test);
   console.log("source" + " : " + stest);
   console.log(source + " : " + source.split("").sort().join(""));
   console.log( source.split("").sort().join("")  + " : " +  target.split("").sort().join(""))
   */
  }
  if (source === "" || target === "") return false;
  return (
    source.trim().split("").sort().join("") ===
    target.trim().split("").sort().join("")
  );
}
