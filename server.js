const express = require("express");
const app = express();
require("./db");

const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.listen(6000, () => {
  console.log("server is listening on PORT 6000");
});
