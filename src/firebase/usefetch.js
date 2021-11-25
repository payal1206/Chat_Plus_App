import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "@firebase/firestore";

const UsefetchAllFromFirestore = (db, col, uid) => {
  const [fetchedData, setFetchedData] = useState([]);
  const fetchRequest = async () => {
    try {
      const result = [];
      const selectedCollection = collection(db, col);
      const searchQuery = query(
        selectedCollection,
        where("user_id", "==", uid)
      );
      const res = await getDocs(searchQuery);
      res.forEach((x) => result.push({ id: x.id, ...x.data() }));
      setFetchedData(result);
    } catch (err) {}
  };
  useEffect(() => fetchRequest(), []);
  return fetchedData;
};

export default UsefetchAllFromFirestore;
