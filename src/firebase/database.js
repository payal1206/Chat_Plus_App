import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
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
    const res = await addDoc(collection(db, "contacts"), { ...data });
    return { id: res.id };
  } catch (err) {
    console.log("an error occured", err.message);
  }
}
// add chats
async function addChatToFirestore(data) {
  try {
    const res = await addDoc(collection(db, "chats"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    const ref = doc(db, "chats", res.id);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      const chat = docSnap.data();
      return { ...chat, id: res.id };
    } else {
      console.log("No such document!");
    }
  } catch (err) {
    console.log("an error occured", err.message);
  }
}
// edit contact
async function editContactToFirestore(data) {
  try {
    //    const res= await setDoc(doc(collection(db, "contacts"),data.id),data);
    const res = await setDoc(doc(db, "contacts", data.id), data);

    console.log(res);
  } catch (err) {
    console.log("an error occured", err.message);
  }
}


// const ans = asyncCall();
export {
  addUserToFirestore,
  addContactToFirestore,
  addChatToFirestore,
  editContactToFirestore,
};


// notication came before adding the contact
//get contact
//add chats
