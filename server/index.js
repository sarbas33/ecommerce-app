const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

let dbLocation=

mongoose.connect(process.env.MONGODB_URL)

const app=express();
app.use(bodyParser.json());

app.use('/api/products',require('./routes/products'))

app.listen(3000, ()=>console.log("started server"));