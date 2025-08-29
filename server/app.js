const express=require("express");
const dotenv=require("dotenv").config();
const dataBaseconnect=require("./config/dataBase.js")
const postRoutes=require("./routes/postRoutes.js")
const app=express();
dataBaseconnect();
// middlewares
app.use(express.json());
app.use(express.urlencoded())




// routes
app.use("/api/movies",postRoutes)
const port=process.env.PORT||5000 ;
app.listen(port,()=>console.log(`server is started on http://localhost:${port}`));