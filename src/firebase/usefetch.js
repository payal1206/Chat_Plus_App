import {
  getDocs,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "@firebase/firestore";

export const fetchAllFromFirestore = async (db, col, uid, p = "user_id") => {
  const fetchedData = [];
  try {
    const selectedCollection = collection(db, col);
    const searchQuery = query(selectedCollection, where(p, "==", uid));
    const res = await getDocs(searchQuery);
    res.forEach((x) => fetchedData.push({ id: x.id, ...x.data() }));
  } catch (err) {
    console.log("the collection", col);
    console.log(err);
  }

  return fetchedData;
};

export const fetchChatHistory = (db, col) => {
  return async (lid) => {
    const theCollection = `${col}/link_${lid}/${lid}`;
    const selectedCollection = collection(db, theCollection);
    const chatHistory = [];
    const searchQuery = query(selectedCollection, orderBy("createdAt"));
    try {
      const res = await getDocs(searchQuery);
      res.forEach((x) => chatHistory.push({ id: x.id, ...x.data() }));
    } catch (err) {
      console.log(err);
    }
    return chatHistory;
  };
};

export function chatListerner(db, col, lid, fxn) {
  const theCollection = `${col}/link_${lid}/${lid}`;
  const selectedCollection = collection(db, theCollection);
  const searchQuery = query(selectedCollection, orderBy("createdAt"));
  return onSnapshot(searchQuery, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      fxn(doc);
    });
  });
}
