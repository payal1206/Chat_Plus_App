const msg1 = {
  sid: "payal",
  rid: "law",
};
const recentPairs = [
  ["law", "payal"],
  ["law", "sam"],
];
const meg0 = {
  sid: "yashee",
  rid: "payal",
};
const incoming_msg2 = {
  sid: "law",
  rid: "payal",
};

// ["law","payal"] or ["payal","law"]
if (recentPairs.includes([sid, rid]) || recentPairs.includes([rid, sid])) {
  //replace
} else {
  //maintain
}
