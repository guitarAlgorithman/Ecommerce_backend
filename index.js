const express = require('express');
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDb = require('./src/config/db')

const routes = require("./src/routes");

connectDb();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(process.env.PORT);