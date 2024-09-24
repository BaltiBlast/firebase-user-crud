// === IMPORTS === //
// npm
const app = require("express");

// local
const loginController = require("./controllers/crudUser/loginController.js");
const { loginPost } = loginController;

// === CONFIGURATION === //
const router = app.Router();

// === ROUTES === //
router.post("/login", loginPost);

// === EXPORTS === //
module.exports = router;
