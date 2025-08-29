const express=require("express");
const {getPosts,postPosts,updatePosts,getidPosts,deletePosts}=require("../controllers/postControllers.js")
const routes=express.Router();
routes.get("/get",getPosts)
routes.post("/post",postPosts)
routes.get("/get/:id",getidPosts)
routes.put("/update/:id",updatePosts)
routes.delete("/delete/:id",deletePosts)
module.exports=routes;
