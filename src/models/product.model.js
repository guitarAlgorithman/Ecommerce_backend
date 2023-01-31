const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true,
    },
    long_description: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    imgUrl: {
        type: String
    },
  });

const products = mongoose.model("products", productSchema);
module.exports = products;