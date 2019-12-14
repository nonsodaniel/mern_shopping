const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("config");

const app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json());

//can act as body parser
// app.use(express.json());

//db config
// const Db = config.get("mongoURI");
const Db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

//use ROutes
app.use("/api/items", require("./routes/api/Items"));
app.use("/api/users", require("./routes/api/Users"));
app.use("/api/auth", require("./routes/api/auth"));

// on production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server started on port", port));
