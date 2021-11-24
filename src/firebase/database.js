import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./config";

//getUsers
async function asyncCall() {
  //getting data
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

//addUser
async function addUserToFirestore(data) {
  try {
    const res = await addDoc(collection(db, "users"), { ...data });
    return { uid: res.id };
  } catch (err) {
    console.log("an error occured", err.message);
  }
}

//add contact
async function addContactToFirestore(data) {
  try {
    const res = await addDoc(collection(db, "contact"), { ...data });
    return { id: res.id };
  } catch (err) {
    console.log("an error occured", err.message);
  }
}

//get contact
//add chats
//add recentchats
//get recentchats
// edit contact
//delete contact

// const ans = asyncCall();
export { addUserToFirestore, addContactToFirestore };
