const express=require("express");
const simpleRoutes=require("./routes/simple")
const dotenv=require("dotenv").config();
const app=express();



app.use("/api", simpleRoutes);

const port=process.env.PORT||5000 ;
app.listen(port,()=>console.log(`server is started on http://localhost:${port}`));