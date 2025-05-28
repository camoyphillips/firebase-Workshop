
// Documentation
// https://firebase.google.com/docs/database/web/start

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import{
    getDatabase,
    ref,
    child,
    get,
    push, 
    set,
    onValue,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";




  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCzpgtTGmCxGUw8Ubr6b7f6yJUEwTMH4ZM",
    authDomain: "acekreme-inc.firebaseapp.com",
    projectId: "acekreme-inc",
    storageBucket: "acekreme-inc.firebasestorage.app",
    messagingSenderId: "106334339897",
    appId: "1:106334339897:web:1b8f9ab47661cdb5879ee8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize a database connection
const database = getDatabase();

// Fetch messages
const messages = ref(database, "/messages");

onValue(
    messages,
    (snapshot) => {
        console.log(messages);
    }
)
