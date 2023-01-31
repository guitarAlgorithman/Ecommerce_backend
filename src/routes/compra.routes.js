const express = require("express");
const auth = require("../auth/auth");

const router = express.Router();

const {buy} = require("../controllers/compra.controller");

router.post("/:name",  auth, buy);

module.exports = router;