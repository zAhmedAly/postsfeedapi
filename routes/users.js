const express = require("express");

const UserController = require("../contollers/users");

const router = express.Router();

router.post("/register", UserController.createUser);

router.post("/login", UserController.userLogin);

module.exports = router;
