import {
  getDocs,
  collection,
  query,
  where,
  orderBy,
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
  const selectedCollection = collection(db, col);
  return async (uid, cid) => {
    const chatHistory = [];
    const searchQuery = query(
      selectedCollection,
      where("senderId", "==", uid),
      where("receiverId", "==", cid),
      orderBy("createdAt")
    );
    try {
      const res = await getDocs(searchQuery);
      res.forEach((x) => chatHistory.push({ id: x.id, ...x.data() }));
    } catch (err) {
      console.log(err);
    }
    return chatHistory;
  };
};
