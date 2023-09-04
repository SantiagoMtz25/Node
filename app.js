// Dependencias
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./model/task");

// Creamos instancia de express

const app = express();
const indexRoutes = require("./routes/routeindex");
const userRoutes = require("./routes/routeusers");

app.use(express.json());

app.use("/", indexRoutes);
app.use("/users", userRoutes);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to DB"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en puerto ${process.env.PORT}`);
});
