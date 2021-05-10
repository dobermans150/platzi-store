// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBW7miNL9hLJFA8kW3_pHTS2XuYA79lg3w",
  authDomain: "platzi-store-86de7.firebaseapp.com",
  projectId: "platzi-store-86de7",
  storageBucket: "platzi-store-86de7.appspot.com",
  messagingSenderId: "169427420645",
  appId: "1:169427420645:web:33dfaf9a34b7590ee21b0c",
  measurementId: "G-JSYX9J5KF2",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
