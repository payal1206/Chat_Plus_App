//const str = '[["wew","wewe"],["dsdsd","cdsdsf"],["123","4567"]]';

function convertToArr(stringedArr) {
  const splitter = (str, a) => str.slice(1, -1).split(a);
  const temp = splitter(stringedArr, "],");
  const stringedArrList = temp.map((el, idx) =>
    idx !== temp.length - 1 ? (el + "]").toString() : el
  );
  return stringedArrList
    .map((el) => splitter(el, ","))
    .map((ele) => ele.map((e) => e.slice(1, -1)));
}

//['"wew"', '"wewe"'].map((el) => console.log(el));
// console.log(convertToArr(str));
// console.log(parseInt("[1]"));
const str = '[["wew","wewe"],["dsdsd","cdsdsf"],["123","4567"]]';
console.log("JSON:::", JSON.parse(str));
console.log("self:::", convertToArr(str));
