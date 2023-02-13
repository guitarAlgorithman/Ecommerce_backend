const express = require("express");
const auth = require("../auth/auth");

const router = express.Router();

const {buy,getCompras} = require("../controllers/compra.controller");

router.post("/buy/:name",  auth, buy);
router.get("/compras/:username",  auth, getCompras);

module.exports = router;