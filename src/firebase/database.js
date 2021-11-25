import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";
import usefetchAllFromFirestore from "./usefetch";

//===users=====
//addUser
async function addUserToFirestore(data) {
  try {
    const res = await addDoc(collection(db, "users"), { ...data });
    return { uid: res.id };
  } catch (err) {
    console.log("an error occured", err.message);
  }
}
//getUsers
async function asyncCall() {
  //getting data
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

// ===contacts====
//get all contacts
function setAllContacts() {
  return usefetchAllFromFirestore(db, "contact");
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
// edit contact
async function editContactToFirestore(data) {
  try {
    const { id } = data;
    await setDoc(doc(collection(db, "contacts"), id), data);
  } catch (err) {
    return { msg: "an error occured" + err.message };
  }
}
//delete contact  //deletedoc
async function deleteContactFromFirestore(id) {
  try {
    await deleteDoc(doc(db, "contacts", id));
  } catch (err) {
    return { msg: "an error occured" + err.message };
  }
}

//===chats=======
// add chats and recentchats
async function addChatToFirestore(data) {
  try {
    //add chat
    const { id } = await addDoc(collection(db, "chats"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    //add recent chat
    await setDoc(doc(collection(db, "recentChats"), id), data);
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
//get all recent chats
function setAllRecentChats() {
  return usefetchAllFromFirestore(db, "recentChats");
}

// edit contact   //setdoc

// const ans = asyncCall();
export {
  addUserToFirestore,
  addContactToFirestore,
  addChatToFirestore,
  editContactToFirestore,
  deleteContactFromFirestore,
};


// notication came before adding the contact
//get contact
//add chats
