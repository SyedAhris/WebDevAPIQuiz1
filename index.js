const express = require("express");
var cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const booksRoute = require("./routes/books");

const app = express();

dotenv.config(); // necessary to use .env variables


//mongo db connection connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connection Successfull!"))
.catch((err) =>{
    console.log(err);
});

//check api
app.get("/", (req, res)=>{
    console.log("test is successfull");
    res.send("Welcome to the backend server");
});

app.use(express.json());
app.use(cors());

app.use("/api/books", booksRoute);

app.listen(process.env.PORT_NO, ()=>{
    console.log("backend server is running at: ", process.env.PORT_NO);
});
