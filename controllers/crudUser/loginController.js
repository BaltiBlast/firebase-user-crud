// === IMPORTS === //
// npm
const { signInWithEmailAndPassword, deleteUser } = require("firebase/auth");

// local
const { auth } = require("../../services/config.js");

const loginController = {
  // === POST === //
  // login
  loginPost: (req, res) => {
    const { email, password } = req.body;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("USER", userCredential.user.uid);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        res.status(401).send("Login failed");
      });
  },
};

// === EXPORTS === //
module.exports = loginController;
