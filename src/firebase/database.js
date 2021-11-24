import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config";

async function asyncCall() {   //getting data
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
})};

//add contact
//get contact
//add chats
//add recentchats
//get recentchats    
//add user           -p-a-y-a-l-
// edit contact
//delete contact




const ans=asyncCall();
export {ans}