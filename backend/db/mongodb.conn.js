import mongoose from "mongoose"

const connection=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://soumyamakkar123:soumyamakkar123@cluster0.vsldh.mongodb.net/chat_app_db?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Db connected")
    }
    catch(error){
        console.log("Error in connecting db",error.message)
    }
}

export default connection