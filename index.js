const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();
//import routes
const authroute = require("./routes/auth");



mongoose.connect(process.env.DB_CONNECT,
{ useUnifiedTopology: true , useNewUrlParser: true  } ,
 data);
function data(){
  console.log("connected to database");
}

app.use(express.json());

// using this we go to localhost:300/api/login/ before every route in the route file
app.use("/api/user" , authroute);


app.listen(3000, message);
function message(){
  console.log("the server is running at port 3000");
}
