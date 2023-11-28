const express = require("express");
const { loginUser, signupUser, googleAuth } = require("../controllers/auth");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.post("/google", googleAuth);

module.exports = router;
