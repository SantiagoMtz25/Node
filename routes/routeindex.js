// Dependencias
const express = require("express");
const Task = require("../model/task");
const app = express();
const validacion = require("../middleware/validateToken");

// Definir rutas  GET , POST, PUT, DELETE

//GET
app.get("/getAllTasks", validacion, async (req, res) => {
  // []
  const task = await Task.find();
  return res.json(task);
  //const identificador = req.params.id;
  //return res.send("Peticion GET recibida" + "id: " + identificador);
});

//POST
app.post("/addTask", async (req, res) => {
  //const usuario = req.body.usuario;

  const task = new Task(req.body);
  console.log(task);
  await task.save();
  return res.send("Peticion POST recibida ");
});

//PUT
app.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  console.log(task);
  task.title = "OTRO TITULO 123";
  task.status = true;
  await Task.updateOne({ _id: id }, task);

  return res.send("Peticion PUT recibida");
});

//DELETE
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  //const task = await Task.findById(id);
  // console.log(task);
  await Task.deleteOne({ _id: id });

  return res.send("Peticion DELETE recibida");
});

module.exports = app;
