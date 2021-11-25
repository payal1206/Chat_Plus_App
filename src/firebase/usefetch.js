import { useState, useEffect } from "react";
import { getDocs, collection, query } from "@firebase/firestore";

const UsefetchAllFromFirestore = (db, col) => {
  const [fetchedData, setFetchedData] = useState([]);
  const fetchRequest = async () => {
    try {
      const result = [];
      const res = await getDocs(query(collection(db, col)));
      res.forEach((x) => result.push({ id: x.id, email: x.data().email }));
      setFetchedData(result);
    } catch (err) {}
  };
  useEffect(() => fetchRequest(), []);
  return fetchedData;
};

export default UsefetchAllFromFirestore;
