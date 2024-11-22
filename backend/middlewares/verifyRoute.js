import jwt from "jsonwebtoken";
import User from "../models/auth.models.js"

 const verifyRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: "Token not found, please login" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decodedToken) {
            return res.status(401).json({ message: "Invalid token" });
        }

        const _id = decodedToken.userid;
        const user = await User.findOne({ _id }).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default verifyRoute
