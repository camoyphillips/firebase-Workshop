
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
        
        // Create a reference to the messages ul
        let ul = document.getElementById("messages");

        ul.replaceChildren();

        // Loop through the messaegs children
        snapshot.forEach((childSnapshot) => {

            // Fetch the child id and data
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();

            console.log(childKey);
            console.log(childData);

            // Add message data to ul
            const text = document.createTextNode(
                childData.message + " ~ " + childData.name
            );

            const li = document.createElement("li");

            li.appendChild(text);
            ul.appendChild(li);

            // Append using innerHtml
            // const nextMessage = "<li>" + childData.message + " ~ " + childData.name + "</li>";

        });
},{
        onlyOnce: false
    }
)

const add = document.getElementById("add");

add.addEventListener("click", function(e){

    const name = document.getElementById("name");
    const message = document.getElementById("message");

    const newMessage = push(messages);

    set(newMessage, {
        name: name.value,
        message: message.value,
        createdAt: serverTimestamp(),
    });

});
         