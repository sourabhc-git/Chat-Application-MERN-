const express  = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app  = express();
const userRoutes = require("./routes/userRoutes")
require("dotenv").config();


app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedtopology: true,

} ).then(()=>{
    console.log("Db connection succesfull");
}).catch((err)=>{
    console.log(err.message
        )
})

//This is a callback function
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server started at Port ${process.env.PORT}`);
})
