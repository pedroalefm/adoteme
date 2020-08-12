const express = require("express");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

const login = require("../controllers/Auth/login");
const registration = require("../controllers/Auth/register");

router.post("/register", registration.Register);
router.post("/login", login.Login);

module.exports = router;
