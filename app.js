// === IMPORTS === //
// npm
const express = require("express");
const { signInWithEmailAndPassword } = require("firebase/auth");
require("dotenv").config();

// local
const router = require("./router.js");

// === CONFIGURATION === //
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

// // === FUNCTIONS === //
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log("USER", user.uid);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("ERROR", errorCode, errorMessage);
//   });

// === LISTENER === //
app.listen(process.env.PORT, () => {
  console.log(`La broche tourne sur le port ${process.env.PORT}`);
});
