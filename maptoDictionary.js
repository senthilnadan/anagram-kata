function key(item) {
  return item.split("").sort().join("");
}

function dictItem(item) {
  let object = {};
  //console.log("key(item)" + key(item));
  object["key"] = key(item);
  object["value"] = [item];
  //console.log("object is " + object);
  return object;
}

export default function mapToDictionary(source) {
  const map2 = new Map();

  source
    .map((item) => dictItem(item))
    .forEach((object) => {
      map2.set(object.key, object.value);
    });

  return map2;
  /*
    .map((object) => {
      return [object.key, object.value];
    });
    */
  //.reduce((pv, cv) => (cv === player ? pv + 1 : pv), 0);
}
