// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getDocs, collection, query, where } = require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDIG1difrSC_j9NLaOZF-p_nA7h5forn1c",
  authDomain: "chatplusapp-32900.firebaseapp.com",
  databaseURL: "https://chatplusapp-32900-default-rtdb.firebaseio.com",
  projectId: "chatplusapp-32900",
  storageBucket: "chatplusapp-32900.appspot.com",
  messagingSenderId: "366310364869",
  appId: "1:366310364869:web:150bc5fe6ac42ae5ddc2ac",
  measurementId: "G-WJT9X246F7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const searchQuery = query(
  selectedCollection,
  where("senderId", "==", "TyvgeBNdwbcsBFKrxNNwUys6orV2"),
  where("receiverId", "==", cid)
);
try {
  const res = await getDocs(searchQuery);
  // res.forEach((x) => chatHistory.push({ id: x.id, ...x.data() }));
  res.forEach((x) => console.log(x));
} catch (err) {
  console.log(err);
}
