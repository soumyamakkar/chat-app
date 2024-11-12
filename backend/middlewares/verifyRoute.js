import jwt from "jsonwebtoken"

const verifyRoute=async (req,res,next)=>{

try{
    const token=req.cookies.jwt;


    if(!token){
        return res.status(401).send({message:"Token not found, please login"});
    }
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET_KEY);
    if(!decodedToken){
        return res.status(404).send({message:"Invalid token"});
    }
    const _id=decodedToken.userid;
    const user=await User.findOne({_id}).select("-password");
    if(!user){
        return res.status(404).send({message:"User not found"});
    }
    req.user=user;
    next();

}catch(error){
    res.status(500).send("Internal server error",error.message)
}

}