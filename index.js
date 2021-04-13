
const express = require('express')

const port = process.env.PORT || 5005 ;
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;


const app = express()
app.use(bodyParser.json())
app.use(cors())
require('dotenv').config()



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z2baq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log('database connted',err)
  const productsCollection = client.db("bookShop").collection("products");
  productsCollection.insertOne({"sij":"23" ,"coolboy":"45","naruto":"34"})
  .then(res=>console.log(res))
  

 

 
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)
