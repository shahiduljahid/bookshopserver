// external imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

//internal Import
const Order = require("./models/Order");
const Product = require("./models/Product");

const app = express();
// database connection
const uri = process.env.DB_URI;
mongoose.set("strictQuery", false);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5050;

app.use(cors());

app.use(express.json());
//routing setup
app.get("/Book", async (req, res) => {
  try {
    const docs = await Product.find();
    res.json(docs);
  } catch {
    res.json({ error: "unknown error" });
  }
});

app.post("/addBook", async (req, res) => {
  console.log(req.body);
  // res.send(true);
  try {
    const newData = new Product(req.body);
    const result = await newData.save();

    if (result) {
      res.send(true);
    }
  } catch (error) {
    res.json({ err: "unknown error" });
  }
});
app.post("/addOrder", async (req, res) => {
  try {
    const newData = new Order(req.body);
    const result = await newData.save();
    if (result) {
      res.send(true);
    }
  } catch (error) {
    res.json({ err: "unknown error" });
  }
});

app.delete("/deleteBook/:id", async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete({
      _id: req.params.id,
    });
    res.send(data);
  } catch {
    res.send("Wrong parameter detected");
  }
});

app.use("/", (req, res) => {
  res.json({ mess: "iam ALive" });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
