// === IMPORTS === //
// npm
const { signInWithEmailAndPassword } = require("firebase/auth");

// local
const { auth } = require("../../services/config.js");

const loginController = {
  // === POST === //
  // login
  loginPost: async (req, res) => {
    const { email, password } = req.body;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("SESSION", req.session);

      req.session.user = user;
      res.json({ message: "Connexion réussie" });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  logoutGet: (req, res) => {
    req.session.destroy();
    res.json({ message: "Déconnexion réussie" });
    // res.redirect("/login");
  },
};

// === EXPORTS === //
module.exports = loginController;
