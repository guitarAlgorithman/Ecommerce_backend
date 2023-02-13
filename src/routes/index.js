const express = require("express");
const router = express.Router();


const productRouter = require("./product.routes");
const userRouter = require("./user.routes");
const compraRouter = require("./compra.routes");

router.use("/products", productRouter);
router.use("/user", userRouter);
router.use("/comprar", compraRouter);

module.exports = router;