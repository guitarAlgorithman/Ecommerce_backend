const express = require("express");

const router = express.Router();

const {findAll, findOneByName } = require("../controllers/product.controller");

router.get("/", findAll);
router.get("/:name", findOneByName);

module.exports = router;