require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db")
const useRoutes = require ("../routes/users")
const authRoutes = require("../routes/auth");



// database connection
connection()

//middlewares monitores de processamento
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", useRoutes);
app.use("/api/auth", authRoutes)

const port = process.env.port || 3000;
app.listen(port,() => console.log(`listening on port ${port}..`))