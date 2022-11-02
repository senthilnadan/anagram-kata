export default function arraySplit(source, size) {
  let target = [];
  let index = 0;
  /*console.log(source);
  console.log("size " + size);
  console.log("size " + source.length);
  */
  while (index < source.length) {
    target.push(source.splice(0, size));
  }
  return target;
}
