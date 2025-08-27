const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.json({message:"hello i am from moviewer app"})
})
router.post("/post",(req,res)=>{
    res.json({message:"hello i am from post method"})
})
router.put("/put",(req,res)=>{
    res.json({message:"hello i am from put method"})
})
router.delete("/delete",(req,res)=>{
    res.json({message:"hello i am from delete method"})

})
module.exports=router