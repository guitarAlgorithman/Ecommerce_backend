const { default: mongoose } = require("mongoose");

const compraSchema = mongoose.Schema({
    quantity:{
      type:Number,
      require:true,
    },
    street: {
      type: String,
      require: true
    },
    number: {
      type: String,
      require: true,
    },
    comuna: {
      type: String,
      require: true,
    },
    city: {
        type: String,
        require: true,
    },
    date:{
        type:String,
        default: Date,
    },
    product: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Types.ObjectId, ref: "users", require: true
    },
  });

const compras = mongoose.model("compras", compraSchema);
module.exports = compras;