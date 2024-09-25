// === IMPORTS === //
// npm
const express = require("express");
require("dotenv").config();

// local
const router = require("./router.js");

// === CONFIGURATION === //
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

// === LISTENER === //
app.listen(process.env.PORT, () => {
  console.log(`La broche tourne sur le port ${process.env.PORT}`);
});
