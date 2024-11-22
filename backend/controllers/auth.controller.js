import User from "../models/auth.models.js";
import bcrypt from "bcrypt";
import generatejwt from "../utils/jwt_cookies-gen.js";

export const signup = async (req, res) => {
    const { fullname, username, email, password, confirmpassword, gender } = req.body;

    try {
        if (!password || !confirmpassword) {
            return res.status(400).send("Password and confirmation password are required");
        }
        
        if (password !== confirmpassword) {
            return res.status(401).send("Passwords do not match");
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(401).send("User already exists");
        }

        const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const passwordHash = await bcrypt.hash(password, 10);
        
        const newuser = await new User({
            fullname,
            username,
            email,
            password: passwordHash,
            gender,
            profilepic: gender === "male" ? boypic : girlpic
        }).save();
        
        res.status(200).json({
            _id: newuser._id,
            fullname: newuser.fullname,
            username: newuser.username,
            email: newuser.email,
            gender: newuser.gender,
            profilepic: newuser.profilepic
        });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error.message}`);
    }
};

export const login = async (req, res) => {
    try{
        const {username,password}=req.body
        const user=await User.findOne({username})
        const isValidPassword=await bcrypt.compare(password,user.password);

        if(!user || !isValidPassword){
            return res.status(400).send({message:"Invalid username or password"})
        }

        generatejwt(user._id,res)


        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
            gender: user.gender,
            profilepic: user.profilepic
        })
    }
    catch (error) {
        res.status(500).send({error:"Internal servre Error"});
    }
};

export const logout = async (req, res) => {
    try{
        res.cookie("jwt"," ",{
            maxAge:0
        })
        res.status(201).send({message:"Logout successful"})
    }
    catch(error){
        res.status(500).send("Internal server error",error.message)
    }
};
