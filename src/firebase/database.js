import {
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";
import { fetchAllFromFirestore, fetchChatHistory } from "./usefetch";

//===users=====
//addUser
async function addUserToFirestore(id, data) {
  try {
    await setDoc(doc(collection(db, "users"), id), { ...data });
  } catch (err) {
    console.log("an error occured", err.message);
  }
}

async function getUserPhoneNumber(id) {
  const ref = doc(db, "users", id);
  const response = await getDoc(ref);
  const data = response.data();
  return data.phone;
}
//getUsers
// async function asyncCall() {
//   //getting data
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//   });
// }

// ===contacts====
//get all contacts
function setAllContacts(uid) {
  return fetchAllFromFirestore(db, "contacts", uid);
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
      sent: true,
    });
    //add recent chat
    await setDoc(doc(collection(db, "recentChats"), data.linkId), data);
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
async function setAllRecentChats(id) {
  const sentByUser = await fetchAllFromFirestore(
    db,
    "recentChats",
    id,
    "senderId"
  );
  const receivedByUser = await fetchAllFromFirestore(
    db,
    "recentChats",
    id,
    "receiverId"
  );
  console.log("merging", [...sentByUser, ...receivedByUser]);
  return [...sentByUser, ...receivedByUser];
}
//profile
async function UserProfileToFirestore(id) {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (err) {
    console.log("an error occured", err.message);
  }
}
//get chats
const getChatsFromFirestore = fetchChatHistory(db, "chats");

// const ans = asyncCall();
export {
  addUserToFirestore,
  addContactToFirestore,
  addChatToFirestore,
  editContactToFirestore,
  deleteContactFromFirestore,
  setAllContacts,
  UserProfileToFirestore,
  setAllRecentChats,
  getChatsFromFirestore,
  getUserPhoneNumber,
};
