// === IMPORTS === //
// npm
const { deleteUser } = require("firebase/auth");

// local
const { auth } = require("../../services/config.js");

const deleteUserController = {
  // This controller need session to be used
  deleteUserPost: (req, res) => {
    const user = auth.currentUser;
    deleteUser(user)
      .then(() => {
        console.log("USER DELETED");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
      });
  },
};

// === EXPORT === //
module.exports = deleteUserController;
