let express = require("express");
const cors = require("cors");
let mongoose = require("mongoose");
require("dotenv").config();
let router = require("./api/api");
const { urlencoded } = require("express");

let app = express();

const PORT = process.env.PORT || 5000;

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api", router);

mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else{
    console.log("Connected")
}

app.listen(PORT, () => {
  console.log("Backend Started " + PORT);
});
