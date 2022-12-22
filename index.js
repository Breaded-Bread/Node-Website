const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');

app.set("view engine", "ejs");

app.get('/', (req, res) =>{
  res.render('index.ejs');
});

app.get('/page', (req, res) => {
  res.render('page.ejs');
  res.send();
});