import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.objectId,
        ref:"User"
    },
    receiverId:{
        type:mongoose.Schema.Types.objectId,
        ref:"User"
    },
    messages:{
        type:String,
        required:true
    }
})

const Message=mongoose.model('message',messageSchema)
export default Message