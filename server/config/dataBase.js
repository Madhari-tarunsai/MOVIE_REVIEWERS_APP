const mongoose=require("mongoose");
const dataBaseconnect=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL,{dbName:process.env.DB_NAME})
    console.log("database connected succesfully....!")

    }
    catch(err){
        console.log("message",err.message)
    }
    
}
module.exports=dataBaseconnect;
