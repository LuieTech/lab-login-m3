const express = require("express");
const router = express.Router();
const users = require("../controllers/users.controller")
const auth = require("../middlewares/auth.middleware")

router.get("/patata", auth.isAuthenticated, users.hello)
router.post("/users", users.create)
router.post("/login", users.login)



module.exports = router;
