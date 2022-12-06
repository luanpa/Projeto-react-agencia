require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db")


// database connection
connection()

//middlewares monitores de processamento
app.use(express.json());
app.use(cors());

const port = process.env.port || 3000;
app.listen(port,() => console.log(`listening on port ${port}..`))