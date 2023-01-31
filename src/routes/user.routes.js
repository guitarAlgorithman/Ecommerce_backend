const express = require("express");
const router = express.Router();

const { findAll, findOne, signup, signin } = require("../controllers/user.controller");
const auth = require("../auth/auth");

router.get("/all", auth, findAll);
router.get("/findOne", auth, findOne);

router.post("/signup", signup);
router.post("/signin", signin)

module.exports = router;