const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require('./routes/api/Items')

const app = express();

//body parser
app.use(bodyParser.json());

//db config
const Db = require("./config/keys").mongoURI

//connect to mongo
mongoose.connect(Db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("DB connected")).catch(err => console.log(err))

//use ROutes
app.use('/api/items', items)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server started on port", port))