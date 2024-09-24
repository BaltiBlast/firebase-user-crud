// === IMPORTS === //
// npm
const { getAuth } = require("firebase/auth");
const firebaseApp = require("../API/connexionDb.js");

// === CONFIGURATION === //
const auth = getAuth(firebaseApp);

// === EXPORTS === //
module.exports = auth;
