const express = require("express");
const router = express.Router();

const { findAll, findOne, signup, signin,findOneP } = require("../controllers/user.controller");
const auth = require("../auth/auth");

router.get("/all", auth, findAll);
router.get("/findOne", auth, findOne);
router.get("/findOneP/:username", auth, findOneP);

router.post("/signup", signup);
router.post("/signin", signin)

module.exports = router;