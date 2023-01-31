const product = require("../models/product.model");

const findAll = async (req, res) => {
  try {
    const products = await product.find();    
    return res.json({ products });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  };
};

const findOneByName= async (req, res) => {
  try {
    const filter = {
      name: req.params.name
    }
    const products = await product.find(filter);
    return res.json({ products });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  };
};

module.exports = {
  findAll,
  findOneByName
}