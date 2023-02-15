const express = require("express");
const router = express.Router();


const indexRouter = require("./index.routes");
const productRouter = require("./product.routes");
const userRouter = require("./user.routes");
const compraRouter = require("./compra.routes");

router.use("", indexRouter);
router.use("/products", productRouter);
router.use("/user", userRouter);
router.use("/comprar", compraRouter);

module.exports = router;