import mongoose from "mongoose"

const conversationSchema=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Messages"
        }
    ]
},{timestamps:true})

const Conversation=mongoose.model("conversation",conversationSchema)
export default Conversation