const mongoose = require('mongoose');
const connectDb = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_DB);
    console.log("conectado");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;