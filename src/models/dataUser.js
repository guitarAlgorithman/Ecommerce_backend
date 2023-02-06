const { default: mongoose } = require("mongoose");

const dataUserSchema = mongoose.Schema({
    street: {
      type: String,
    },
    number : {
      type: String,
    },
    area: {
      type: String,
    },
    country: {
      type: String,
    },
    edad: {
        type: Number,
    },
    user: {
        type: mongoose.Types.ObjectId, ref: "users", require: true
    },
  });

const dataUser = mongoose.model("dataUser", dataUserSchema);
module.exports = dataUser;