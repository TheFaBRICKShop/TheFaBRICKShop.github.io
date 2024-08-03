// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = event.target.email.value;
    const name = event.target.name.value;

    // Call a JavaScript function to handle the form data
    subscribeUser(email, name);
});

async function subscribeUser(email, name) {
    try {
        await addDoc(collection(db, 'newsletterSubscribers'), {
            email: email,
            name: name,
            timestamp: serverTimestamp()
        });
        console.log('User subscribed successfully');
        alert('Thank you for subscribing!');
    } catch (error) {
        console.error('Error subscribing user: ', error);
    }
}
