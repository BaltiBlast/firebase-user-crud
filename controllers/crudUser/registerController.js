// === IMPORTS === //
// npm
const { createUserWithEmailAndPassword } = require("firebase/auth");

// local
const { auth } = require("../../services/config.js");

const registerController = {
  // === POST === //
  // login
  registerPost: (req, res) => {
    const { email, password } = req.body;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("USER REGISTERED");
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
        res.status(500).send({ error: error.message });
      });
  },
};

// === EXPORTS === //
module.exports = registerController;
