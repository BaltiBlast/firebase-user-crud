// === IMPORTS === //
// npm
const { updateProfile } = require("firebase/auth");

// local
const { auth } = require("../../services/config.js");

const updateUserController = {
  // This controller need session to be used
  updateUserPost: (req, res) => {
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        console.log("USER PROFIL UPDATED");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        res.status(500).send("Error updating profile");
      });
  },
};

// === EXPORT === //
module.exports = updateUserController;
