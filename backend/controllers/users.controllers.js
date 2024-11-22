import User from "../models/auth.models.js";

export const getUsers=async (req,res)=>{
    const loginuserId=req.user._id;
    const userList=await User.find({_id:{$ne:loginuserId}}).select("-password");
    if(!userList){
        res.status(404).send({message:"No users found"});
    }
    else{
        res.status(200).send(userList);
    }
}

//export default getUsers