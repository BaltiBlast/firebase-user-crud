// === IMPORTS === //
// npm
const app = require("express");

// local
const loginController = require("./controllers/crudUser/loginController.js");
const { loginPost } = loginController;

const registerController = require("./controllers/crudUser/registerController.js");
const { registerPost } = registerController;

const deleteUserController = require("./controllers/crudUser/deleteUserController.js");
const { deleteUserPost } = deleteUserController;

const updateUserController = require("./controllers/crudUser/updateUserController.js");
const { updateUserPost } = updateUserController;

// === CONFIGURATION === //
const router = app.Router();

// === ROUTES === //
router.post("/login", loginPost);
router.post("/register", registerPost);
router.post("/delete-current-user", deleteUserPost);
router.post("/update-current-user", updateUserPost);

// === EXPORTS === //
module.exports = router;
