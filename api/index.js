//starting the server
const express = require("express");
const app = express();
//bringing in db
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")


//connection to mongo db

dotenv.config();
//to prevent error in postman
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Successfully Connected to MongoDB"))
  .catch((err) => console.log(err));



  //ROUTES
  app.use("/api/auth",authRoute);
  app.use("/api/users",userRoute);
  app.use("/api/posts",postRoute)


//listening to server
// app.use("/",(req,res)=>{
//   console.log("hey this is main page");
// }) 
app.listen("5000",()=>{
  console.log("Backend is running!");
})



