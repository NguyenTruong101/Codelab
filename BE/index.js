
// // import express from 'express';
// // import { engine } from 'express-handlebars';


// const express = require('express')


// // import morgan from 'morgan';
// const morgan = require('morgan');


// const app = express();
// const port = 3000;

// // HTTP logger
// app.use(morgan('combined'));

// // Temple engine
// // app.engine('handlebars', engine());
// // app.set('view engine', 'handlebars');
// // app.set('views', './views');

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });


const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
Mongoose.connect("mongodb://localhost/db_codelab");
const PersonModel = Mongoose.model("person", {
  firstname: String,
  lastname: String
});

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
// Define REST API
app.post("/person", async (req, res) => {
  try {
    var person = new PersonModel(request.body);
    var result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/people", async (req, res) => {
  try {
    var result = await PersonModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/person/:id", async (req, res) => {
  try {
    var person = await PersonModel.findById(request.params.id).exec();
    response.send(person);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/person/:id", async (req, res) => {
  try {
    var person = await PersonModel.findById(request.params.id).exec();
    person.set(request.body);
    var result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/person/:id", async (req, res) => {
  try {
    var result = await PersonModel.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.listen(3000, () => {
  console.log("Listening at :3000...");
});