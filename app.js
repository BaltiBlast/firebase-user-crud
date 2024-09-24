// === IMPORTS === //
// npm
const express = require("express");
const { initializeApp } = require("firebase/app");
require("dotenv").config();

// === CONFIGURATION === //
const app = express();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const dbInit = initializeApp(firebaseConfig);

// === ROUTES === //
// get
app.get("/", (req, res) => {
  res.send("Hello World");
});

// === LISTENER === //
app.listen(process.env.PORT, () => {
  console.log(`La broche tourne sur le port ${process.env.PORT}`);
});
