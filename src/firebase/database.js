import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config";

async function asyncCall() {   
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
})};

//add contact
//get contact
//add chats
//add recentchats        //
//get recentchats
//add user
// edit contact
//delete contact




const ans=asyncCall();
export {ans}