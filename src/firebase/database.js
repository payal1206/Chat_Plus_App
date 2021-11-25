import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";
import usefetchAllFromFirestore from "./usefetch";

//get all contacts
function setAllContacts() {
  return usefetchAllFromFirestore(db, "contact");
}
//get all contacts
function setAllRecentChats() {
  return usefetchAllFromFirestore(db, "recentChats");
}
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
// add chats and recentchats
async function addChatToFirestore(data) {
  try {
    //add chat
    const { id } = await addDoc(collection(db, "chats"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    //add recent chat
    await setDoc(doc(collection(db, "recentChat"), id), data);
    //fetch the added chat
    const ref = doc(db, "chats", id);
    const fetchRes = await getDoc(ref);
    const chat = fetchRes.data();
    //return the chat details
    return { ...chat, id };
  } catch (err) {
    return { err: "an error occured " + err.message };
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

// edit contact   //setdoc
//delete contact  //deletedoc

// const ans = asyncCall();
export {
  addUserToFirestore,
  addContactToFirestore,
  addChatToFirestore,
  editContactToFirestore,
};
